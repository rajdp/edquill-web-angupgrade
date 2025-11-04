import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../service/auth.service";
import * as i3 from "../../service/creator.service";
import * as i4 from "@angular/common";
function BreadcrumbComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/schedule/schedule-page");
} }
function BreadcrumbComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/repository/content-home");
} }
function BreadcrumbComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "schedule/schedule-page");
} }
function BreadcrumbComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", "/student/dashboard");
} }
function BreadcrumbComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.breadcrumbs == null ? null : ctx_r0.breadcrumbs.parentBreadcrumb, " ");
} }
function BreadcrumbComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.breadcrumbs == null ? null : ctx_r0.breadcrumbs.childBreadcrumb, " ");
} }
export class BreadcrumbComponent {
    constructor(activatedRoute, router, auth, creator) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.creator = creator;
        this.sideNavStatus = false;
        this.href = this.router.url;
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(route => {
            const snapshot = this.router.routerState.snapshot;
            let title;
            if (route.snapshot.data['id'] && (this.roleid == '2' || this.roleid == '6')) {
                title = route.snapshot.data['adminTitle'];
            }
            else if (route.snapshot.data['data1'] && (this.roleid == '6')) {
                title = route.snapshot.data['corporateTitle'];
            }
            else if (route.snapshot.url[1]?.path == '2' && route.snapshot.data['status']) {
                title = route.snapshot.data['secondtitle'];
            }
            else if (this.auth.getSessionData('preview_type') == 'yes') {
                title = route.snapshot.data['student_title'];
            }
            else if (this.auth.getSessionData('preview_type') == 'no') {
                title = route.snapshot.data['teacher_title'];
            }
            else {
                title = route.snapshot.data['title'];
            }
            // let title = route.snapshot.data['title'];
            const parent = route.parent.snapshot.data['breadcrumb'];
            const child = route.snapshot.data['breadcrumb'];
            this.breadcrumbs = {};
            this.title = title;
            this.breadcrumbs = {
                'parentBreadcrumb': parent,
                'childBreadcrumb': child
            };
        });
        this.roleid = this.auth.getRoleId();
        this.creator.contentView.subscribe((res) => {
            if (this.router.url == '/content-text-resource/question-paper/add' || this.router.url == '/content-text-resource/question-paper/edit') {
                console.log(res);
                if (res == true) {
                    this.sideNavStatus = res;
                }
                else if (res != true || res == '' || res == null) {
                    this.sideNavStatus = res;
                }
            }
            else {
                this.sideNavStatus = false;
            }
        });
    }
    ngOnInit() {
    }
    static { this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreadcrumbComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.CreatorService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 8, consts: [[1, "compact-breadcrumb", 3, "ngClass"], [1, "page-header", "py-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "page-header-left"], [1, "mb-0", "fw-semibold"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "mb-0", "bg-transparent"], [1, "breadcrumb-item"], ["title", "Home-Page", "class", "text-decoration-none", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item small", 4, "ngIf"], ["title", "Home-Page", 1, "text-decoration-none", 3, "routerLink"], [1, "bi", "bi-house-fill"], [1, "breadcrumb-item", "small"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "nav", 5)(7, "ol", 6)(8, "li", 7);
            i0.ɵɵtemplate(9, BreadcrumbComponent_a_9_Template, 2, 1, "a", 8)(10, BreadcrumbComponent_a_10_Template, 2, 1, "a", 8)(11, BreadcrumbComponent_a_11_Template, 2, 1, "a", 8)(12, BreadcrumbComponent_a_12_Template, 2, 1, "a", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, BreadcrumbComponent_li_13_Template, 2, 1, "li", 9)(14, BreadcrumbComponent_li_14_Template, 2, 1, "li", 9);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.sideNavStatus == true ? "container" : "container-fluid");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.roleid == "2" || ctx.roleid == "6");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.roleid == "3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.roleid == "4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.roleid == "5");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.breadcrumbs == null ? null : ctx.breadcrumbs.parentBreadcrumb) && (ctx.breadcrumbs == null ? null : ctx.breadcrumbs.childBreadcrumb) != "Passage Details");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.breadcrumbs == null ? null : ctx.breadcrumbs.parentBreadcrumb) == "Content Text Resource" && (ctx.breadcrumbs == null ? null : ctx.breadcrumbs.childBreadcrumb) == "Passage Details");
        } }, dependencies: [CommonModule, i4.NgClass, i4.NgIf, RouterModule, i1.RouterLink], styles: [".compact-breadcrumb[_ngcontent-%COMP%] {\n  .page-header {\n    padding: 0.5rem 0;\n    margin-bottom: 0.5rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  h5 {\n    font-size: 1.125rem;\n    color: #333;\n  }\n\n  .breadcrumb {\n    padding: 0;\n    font-size: 0.875rem;\n    \n    .breadcrumb-item {\n      padding: 0;\n      \n      a {\n        color: #7F3486;\n        transition: color 0.2s ease;\n        \n        &:hover {\n          color: darken(#7F3486, 10%);\n        }\n        \n        i {\n          font-size: 1rem;\n        }\n      }\n      \n      &.small {\n        font-size: 0.813rem;\n      }\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb', standalone: true, imports: [CommonModule, RouterModule, FeatherIconsComponent], template: "<div [ngClass]=\"sideNavStatus == true ? 'container' : 'container-fluid'\" class=\"compact-breadcrumb\">\n    <div class=\"page-header py-2\">\n        <div class=\"d-flex align-items-center justify-content-between\">\n            <div class=\"page-header-left\">\n                <h5 class=\"mb-0 fw-semibold\">{{title}}</h5>\n            </div>\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb mb-0 bg-transparent\">\n                    <li class=\"breadcrumb-item\">\n                        <a *ngIf=\"roleid == '2' || roleid == '6' \" \n                           title=\"Home-Page\" \n                           [routerLink]=\"'/schedule/schedule-page'\"\n                           class=\"text-decoration-none\">\n                            <i class=\"bi bi-house-fill\"></i>\n                        </a>\n                        <a *ngIf=\"roleid == '3'\" \n                           title=\"Home-Page\" \n                           [routerLink]=\"'/repository/content-home'\"\n                           class=\"text-decoration-none\">\n                            <i class=\"bi bi-house-fill\"></i>\n                        </a>\n                        <a *ngIf=\"roleid == '4'\" \n                           title=\"Home-Page\" \n                           [routerLink]=\"'schedule/schedule-page'\"\n                           class=\"text-decoration-none\">\n                            <i class=\"bi bi-house-fill\"></i>\n                        </a>\n                        <a *ngIf=\"roleid == '5'\" \n                           title=\"Home-Page\" \n                           [routerLink]=\"'/student/dashboard'\"\n                           class=\"text-decoration-none\">\n                            <i class=\"bi bi-house-fill\"></i>\n                        </a>\n                    </li>\n                    <li class=\"breadcrumb-item small\" \n                        *ngIf=\"breadcrumbs?.parentBreadcrumb && breadcrumbs?.childBreadcrumb != 'Passage Details'\">\n                        {{breadcrumbs?.parentBreadcrumb}}\n                    </li>\n                    <li class=\"breadcrumb-item small\" \n                        *ngIf=\"breadcrumbs?.parentBreadcrumb == 'Content Text Resource' && breadcrumbs?.childBreadcrumb == 'Passage Details'\">\n                        {{breadcrumbs?.childBreadcrumb}}\n                    </li>\n                </ol>\n            </nav>\n        </div>\n    </div>\n</div>\n", styles: [".compact-breadcrumb {\n  .page-header {\n    padding: 0.5rem 0;\n    margin-bottom: 0.5rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  h5 {\n    font-size: 1.125rem;\n    color: #333;\n  }\n\n  .breadcrumb {\n    padding: 0;\n    font-size: 0.875rem;\n    \n    .breadcrumb-item {\n      padding: 0;\n      \n      a {\n        color: #7F3486;\n        transition: color 0.2s ease;\n        \n        &:hover {\n          color: darken(#7F3486, 10%);\n        }\n        \n        i {\n          font-size: 1rem;\n        }\n      }\n      \n      &.small {\n        font-size: 0.813rem;\n      }\n    }\n  }\n}\n\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.AuthService }, { type: i3.CreatorService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent" }); })();
//# sourceMappingURL=breadcrumb.component.js.map