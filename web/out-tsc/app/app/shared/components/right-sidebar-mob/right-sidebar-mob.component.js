import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../service/subject.services";
import * as i3 from "../../service/login.service";
import * as i4 from "../../service/nav.service";
import * as i5 from "../../service/auth.service";
import * as i6 from "../../service/configuration.service";
import * as i7 from "@angular/common";
const _c0 = a0 => ({ active: a0 });
const _c1 = a0 => [a0];
const _c2 = a0 => ({ "color": a0 });
const _c3 = (a0, a1) => ({ "menu-open": a0, "menu-close": a1 });
const _c4 = () => ({ exact: true });
function RightSidebarMobComponent_li_2_a_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function RightSidebarMobComponent_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵlistener("click", function RightSidebarMobComponent_li_2_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const menuItem_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggletNavActive(menuItem_r2)); });
    i0.ɵɵelement(1, "app-feather-icons", 12);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_a_1_i_2_Template, 1, 0, "i", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", menuItem_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.children);
} }
function RightSidebarMobComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵlistener("click", function RightSidebarMobComponent_li_2_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const i_r5 = i0.ɵɵnextContext().index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeMenu(i_r5)); });
    i0.ɵɵelement(1, "img", 16);
    i0.ɵɵpipe(2, "lowercase");
    i0.ɵɵelementStart(3, "p", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", !menuItem_r2.type ? null : i0.ɵɵpureFunction1(8, _c1, menuItem_r2.path));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("width", menuItem_r2.title == "Class" || menuItem_r2.title == "Report Card" ? "45" : "50");
    i0.ɵɵpropertyInterpolate("src", i0.ɵɵpipeBind1(2, 6, menuItem_r2.imgePath), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", menuItem_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c2, menuItem_r2.active ? "#008F06" : "#8F008A"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(menuItem_r2.title);
} }
function RightSidebarMobComponent_li_2_a_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function RightSidebarMobComponent_li_2_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵelement(1, "app-feather-icons", 12);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_a_3_i_2_Template, 1, 0, "i", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !menuItem_r2.type ? null : menuItem_r2.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", menuItem_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.children);
} }
function RightSidebarMobComponent_li_2_a_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function RightSidebarMobComponent_li_2_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵelement(1, "app-feather-icons", 12);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_a_4_i_2_Template, 1, 0, "i", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !menuItem_r2.type ? null : menuItem_r2.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", menuItem_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.children);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 26);
    i0.ɵɵlistener("click", function RightSidebarMobComponent_li_2_ul_5_li_1_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r6); const childrenItem_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.toggletNavActive(childrenItem_r7)); });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_ul_5_li_1_a_1_i_2_Template, 1, 0, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", childrenItem_r7.children);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_ul_5_li_1_a_2_i_2_Template, 1, 0, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", !childrenItem_r7.type ? null : i0.ɵɵpureFunction1(3, _c1, childrenItem_r7.path))("routerLinkActiveOptions", i0.ɵɵpureFunction0(5, _c4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", childrenItem_r7.children);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_ul_5_li_1_a_3_i_2_Template, 1, 0, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenItem_r7.type ? null : childrenItem_r7.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(3, _c4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", childrenItem_r7.children);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_a_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_ul_5_li_1_a_4_i_2_Template, 1, 0, "i", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenItem_r7.type ? null : childrenItem_r7.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", childrenItem_r7.children);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", !childrenSubItem_r8.type ? null : i0.ɵɵpureFunction1(2, _c1, childrenSubItem_r8.path))("routerLinkActiveOptions", i0.ɵɵpureFunction0(4, _c4));
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenSubItem_r8.type ? null : childrenSubItem_r8.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(2, _c4));
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("href", !childrenSubItem_r8.type ? null : childrenSubItem_r8.path, i0.ɵɵsanitizeUrl);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_a_1_Template, 2, 5, "a", 22)(2, RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_a_2_Template, 2, 3, "a", 23)(3, RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_a_3_Template, 2, 1, "a", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenSubItem_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenSubItem_r8.type === "link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenSubItem_r8.type === "extLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenSubItem_r8.type === "extTabLink");
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 33);
    i0.ɵɵtemplate(1, RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", childrenItem_r7.children);
} }
function RightSidebarMobComponent_li_2_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, RightSidebarMobComponent_li_2_ul_5_li_1_a_1_Template, 3, 1, "a", 21)(2, RightSidebarMobComponent_li_2_ul_5_li_1_a_2_Template, 3, 6, "a", 22)(3, RightSidebarMobComponent_li_2_ul_5_li_1_a_3_Template, 3, 4, "a", 23)(4, RightSidebarMobComponent_li_2_ul_5_li_1_a_4_Template, 3, 2, "a", 24)(5, RightSidebarMobComponent_li_2_ul_5_li_1_ul_5_Template, 2, 1, "ul", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childrenItem_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, childrenItem_r7.active));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r7.type === "sub");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r7.type === "link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r7.type === "extLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r7.type === "extTabLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", childrenItem_r7.children);
} }
function RightSidebarMobComponent_li_2_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 20);
    i0.ɵɵtemplate(1, RightSidebarMobComponent_li_2_ul_5_li_1_Template, 6, 8, "li", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c3, menuItem_r2.active, !menuItem_r2.active));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", menuItem_r2.children);
} }
function RightSidebarMobComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtemplate(1, RightSidebarMobComponent_li_2_a_1_Template, 3, 2, "a", 6)(2, RightSidebarMobComponent_li_2_a_2_Template, 5, 12, "a", 7)(3, RightSidebarMobComponent_li_2_a_3_Template, 3, 3, "a", 8)(4, RightSidebarMobComponent_li_2_a_4_Template, 3, 3, "a", 9)(5, RightSidebarMobComponent_li_2_ul_5_Template, 2, 5, "ul", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, menuItem_r2.active));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.type === "sub");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.type === "link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.type === "extLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.type === "extTabLink");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menuItem_r2.children);
} }
export class RightSidebarMobComponent {
    constructor(router, subject, login, navServices, auth, config) {
        this.router = router;
        this.subject = subject;
        this.login = login;
        this.navServices = navServices;
        this.auth = auth;
        this.config = config;
        this.version = environment.version;
        this.imgUrl = this.config.getimgUrl();
        const firstname = this.auth.getSessionData('firstname') || '';
        const lastname = this.auth.getSessionData('lastname') || '';
        this.name = (firstname + ' ' + lastname).trim() || 'User';
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
            const profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
        });
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
    activeMenu(i) {
        this.menuItems.forEach((items, index) => {
            if (index == i) {
                items.active = !items.active;
            }
            else {
                items.active = false;
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
        console.log(item.active, 'active');
    }
    readUrl(event) {
        if (event.target.files.length === 0)
            return;
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
        if (this.role == 4) {
            this.profile = this.auth.getSessionData('school_profile');
        }
        else {
            this.profile = this.auth.getSessionData('school_profile_url');
        }
        // Add null check before split
        if (this.profile) {
            const profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            }
            else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
        }
        else {
            this.listCheck = true; // Default to true if no profile
        }
    }
    static { this.ɵfac = function RightSidebarMobComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RightSidebarMobComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.LoginService), i0.ɵɵdirectiveInject(i4.NavService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.ConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RightSidebarMobComponent, selectors: [["app-right-sidebar-mob"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 2, consts: [[1, "sidebar", "custom-scrollbar", "ipadViewNavBar"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-2", "mb-5", "text-center"], [2, "font-size", "12px"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "click", 4, "ngIf"], ["style", "text-align: center", "routerLinkActive", "active", "class", "sidebar-header py-1", 3, "routerLink", "click", 4, "ngIf"], ["class", "sidebar-header", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "click"], [3, "icon"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "sidebar-header", "py-1", 2, "text-align", "center", 3, "click", "routerLink"], [3, "width", "src", "title"], [1, "mb-0", 2, "font-size", "10px !important", "color", "#73b5a8", "margin-top", "-8px", 3, "ngStyle"], [1, "sidebar-header", 3, "href"], ["target", "_blank", 1, "sidebar-header", 3, "href"], [1, "sidebar-submenu", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-circle"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"]], template: function RightSidebarMobComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ul", 1);
            i0.ɵɵtemplate(2, RightSidebarMobComponent_li_2_Template, 6, 8, "li", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.menuItems);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.version);
        } }, dependencies: [CommonModule, i7.NgClass, i7.NgForOf, i7.NgIf, i7.NgStyle, i7.LowerCasePipe, RouterModule, i1.RouterLink, i1.RouterLinkActive, FeatherIconsComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RightSidebarMobComponent, [{
        type: Component,
        args: [{ selector: 'app-right-sidebar-mob', standalone: true, imports: [CommonModule, RouterModule, FeatherIconsComponent], template: "<!--<div class=\"main-header-left d-none d-lg-block\">-->\n<!--    <div class=\"logo-wrapper\"><a [routerLink]=\"'/dashboard/default'\">-->\n<!--        <img class=\"blur-up lazyloaded\" src=\"assets/images/Edquill.png\" style=\"width: 140px; height: auto\" alt=\"\">-->\n<!--    </a></div>-->\n<!--</div>-->\n<div class=\"sidebar custom-scrollbar ipadViewNavBar\">\n<!--    <div class=\"sidebar-user text-center\">-->\n<!--        <div>-->\n<!--            <img class=\"img-60 rounded-circle\" *ngIf=\"profile == '' || profile == null \" src=\"assets/images/ristaschool/school-default.png\"  alt=\"\">-->\n<!--            <img class=\"img-60 rounded-circle\" *ngIf=\"(profile != '' && profile != null) && !listCheck\" style=\"height: 60px\" src=\"{{imgUrl +'/'+ profile}}\"  alt=\"\">-->\n<!--            <img class=\"img-60 rounded-circle\" *ngIf=\"profile != '' && listCheck\" style=\"height: 60px\" [src]=\"profile\"  alt=\"\">-->\n<!--        </div>-->\n<!--        &lt;!&ndash;    <h6 class=\"mt-3 f-14\">{{name}}</h6>&ndash;&gt;-->\n<!--        <h6 class=\"mt-3 f-14\">{{schoolName}}</h6>-->\n<!--        &lt;!&ndash;    <p *ngIf=\"role == 1\">Admin</p>&ndash;&gt;-->\n<!--        &lt;!&ndash;    <p *ngIf=\"role == 2\">User</p>&ndash;&gt;-->\n<!--    </div>-->\n    <ul class=\"sidebar-menu\">\n        <li *ngFor=\"let menuItem of menuItems; let i = index\" [ngClass]=\"{active: menuItem.active}\">\n            <!-- Sub -->\n            <a href=\"javascript:void(0)\" class=\"sidebar-header\" *ngIf=\"menuItem.type === 'sub'\"\n               (click)=\"toggletNavActive(menuItem)\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n<!--                <span>{{menuItem.title}}<span-->\n<!--                    class=\"badge badge-{{menuItem.badgeType}} ml-3\"-->\n<!--                    *ngIf=\"menuItem.badgeType\">{{menuItem.badgeValue}}</span></span>-->\n                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>\n            </a>\n            <!-- Link -->\n            <a style=\"text-align: center\" [routerLink]=\"!menuItem.type ? null : [menuItem.path]\" routerLinkActive=\"active\" class=\"sidebar-header py-1\"\n               *ngIf=\"menuItem.type === 'link'\" (click)=\"activeMenu(i)\" >\n                <img width=\"{{menuItem.title == 'Class' || menuItem.title == 'Report Card' ? '45' : '50'}}\" src=\"{{menuItem.imgePath | lowercase}}\" title=\"{{menuItem.title}}\">\n                <p [ngStyle]=\"{'color': menuItem.active ? '#008F06' : '#8F008A'}\" class=\"mb-0\" style=\"font-size: 10px !important; color: #73b5a8; margin-top: -8px\">{{menuItem.title}}</p>\n<!--                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>-->\n<!--                <span>{{menuItem.title}}<span-->\n<!--                    class=\"badge badge-{{menuItem.badgeType}} ml-3\"-->\n<!--                    *ngIf=\"menuItem.badgeType\">{{menuItem.badgeValue}}</span></span>-->\n<!--                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>-->\n            </a>\n            <!-- External Link -->\n            <a href=\"{{ !menuItem.type ? null : menuItem.path }}\" class=\"sidebar-header\" *ngIf=\"menuItem.type === 'extLink'\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n<!--                <span>{{menuItem.title}}<span-->\n<!--                    class=\"badge badge-{{menuItem.badgeType}} ml-3\"-->\n<!--                    *ngIf=\"menuItem.badgeType\">{{menuItem.badgeValue}}</span></span>-->\n                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>\n            </a>\n            <!-- External Tab Link -->\n            <a href=\"{{ !menuItem.type ? null : menuItem.path }}\" target=\"_blank\" class=\"sidebar-header\"\n               *ngIf=\"menuItem.type === 'extTabLink'\">\n                <app-feather-icons [icon]=\"menuItem.icon\"></app-feather-icons>\n<!--                <span>{{menuItem.title}}<span-->\n<!--                    class=\"badge badge-{{menuItem.badgeType}} ml-3\"-->\n<!--                    *ngIf=\"menuItem.badgeType\">{{menuItem.badgeValue}}</span></span>-->\n                <i class=\"fa fa-angle-right pull-right\" *ngIf=\"menuItem.children\"></i>\n            </a>\n\n            <!-- 2nd Level Menu -->\n            <ul class=\"sidebar-submenu\" [ngClass]=\"{'menu-open': menuItem.active, 'menu-close': !menuItem.active }\"\n                *ngIf=\"menuItem.children\">\n                <li *ngFor=\"let childrenItem of menuItem.children\" [ngClass]=\"{active: childrenItem.active}\">\n                    <!-- Sub -->\n                    <a href=\"javascript:void(0)\" *ngIf=\"childrenItem.type === 'sub'\" (click)=\"toggletNavActive(childrenItem)\">\n                        <i class=\"fa fa-circle\"></i>\n<!--                        <span> {{childrenItem.title}} <span-->\n<!--                            class=\"badge badge-{{childrenItem.badgeType}} pull-right\"-->\n<!--                            *ngIf=\"childrenItem.badgeType\">{{childrenItem.badgeValue}}</span> </span>-->\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- Link -->\n                    <a [routerLink]=\"!childrenItem.type ? null : [childrenItem.path]\" *ngIf=\"childrenItem.type === 'link'\"\n                       routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                        <i class=\"fa fa-circle\"></i>\n<!--                        <span>{{childrenItem.title}} <span-->\n<!--                            class=\"badge badge-{{childrenItem.badgeType}} pull-right\"-->\n<!--                            *ngIf=\"childrenItem.badgeType\">{{childrenItem.badgeValue}}</span></span>-->\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- External Link -->\n                    <a href=\"{{ !childrenItem.type ? null : childrenItem.path }}\" *ngIf=\"childrenItem.type === 'extLink'\"\n                       routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                        <i class=\"fa fa-circle\"></i>\n<!--                        <span>{{childrenItem.title}} <span-->\n<!--                            class=\"badge badge-{{childrenItem.badgeType}} pull-right\"-->\n<!--                            *ngIf=\"childrenItem.badgeType\">{{childrenItem.badgeValue}}</span></span>-->\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- External Tab Link -->\n                    <a href=\"{{ !childrenItem.type ? null : childrenItem.path }}\" target=\"_blank\"\n                       *ngIf=\"childrenItem.type === 'extTabLink'\">\n                        <i class=\"fa fa-circle\"></i>\n<!--                        <span>{{childrenItem.title}} <span-->\n<!--                            class=\"badge badge-{{childrenItem.badgeType}} pull-right\"-->\n<!--                            *ngIf=\"childrenItem.badgeType\">{{childrenItem.badgeValue}}</span></span>-->\n                        <i class=\"fa fa-angle-down pull-right\" *ngIf=\"childrenItem.children\"></i>\n                    </a>\n                    <!-- 3rd Level Menu -->\n                    <ul class=\"sidebar-submenu\" *ngIf=\"childrenItem.children\">\n                        <li *ngFor=\"let childrenSubItem of childrenItem.children\">\n                            <!-- Link -->\n                            <a [routerLink]=\"!childrenSubItem.type ? null : [childrenSubItem.path]\"\n                               *ngIf=\"childrenSubItem.type === 'link'\" routerLinkActive=\"active\"\n                               [routerLinkActiveOptions]=\"{exact: true}\">\n                                <i class=\"fa fa-circle\"></i>\n<!--                                <span> {{childrenSubItem.title}} <span-->\n<!--                                    class=\"badge badge-{{childrenSubItem.badgeType}} pull-right\"-->\n<!--                                    *ngIf=\"childrenSubItem.badgeType\">{{childrenSubItem.badgeValue}}</span> </span>-->\n                            </a>\n                            <!-- External Link -->\n                            <a href=\"{{ !childrenSubItem.type ? null : childrenSubItem.path }}\"\n                               *ngIf=\"childrenSubItem.type === 'extLink'\" routerLinkActive=\"active\"\n                               [routerLinkActiveOptions]=\"{exact: true}\">\n                                <i class=\"fa fa-circle\"></i>\n<!--                                <span>{{childrenSubItem.title}} <span-->\n<!--                                    class=\"badge badge-{{childrenSubItem.badgeType}} pull-right\"-->\n<!--                                    *ngIf=\"childrenSubItem.badgeType\">{{childrenSubItem.badgeValue}}</span></span>-->\n                            </a>\n                            <!-- External Tab Link -->\n                            <a href=\"{{ !childrenSubItem.type ? null : childrenSubItem.path }}\" target=\"_blank\"\n                               *ngIf=\"childrenSubItem.type === 'extTabLink'\">\n                                <i class=\"fa fa-circle\"></i>\n<!--                                <span>{{childrenSubItem.title}} <span-->\n<!--                                    class=\"badge badge-{{childrenSubItem.badgeType}} pull-right\"-->\n<!--                                    *ngIf=\"childrenSubItem.badgeType\">{{childrenSubItem.badgeValue}}</span></span>-->\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n    </ul>\n    <div class=\"mt-2 mb-5 text-center\">\n        <p style=\"font-size: 12px\">{{version}}</p>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.Router }, { type: i2.SubjectServices }, { type: i3.LoginService }, { type: i4.NavService }, { type: i5.AuthService }, { type: i6.ConfigurationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RightSidebarMobComponent, { className: "RightSidebarMobComponent" }); })();
//# sourceMappingURL=right-sidebar-mob.component.js.map