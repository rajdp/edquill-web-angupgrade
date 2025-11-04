import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CreatorService } from '../../service/creator.service';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { RightSidebarMobComponent } from '../../components/right-sidebar-mob/right-sidebar-mob.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Header2Component } from '../../components/header2/header2.component';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../service/nav.service";
import * as i2 from "../../../environment.service";
import * as i3 from "../../service/auth.service";
import * as i4 from "../../service/common-data.service";
import * as i5 from "../../service/configuration.service";
import * as i6 from "@angular/common";
import * as i7 from "@angular/router";
function ContentLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "img", 11);
    i0.ɵɵelementEnd();
} }
function ContentLayoutComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-header2");
} }
function ContentLayoutComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-header", 12);
    i0.ɵɵlistener("rightSidebarEvent", function ContentLayoutComponent_Conditional_3_Template_app_header_rightSidebarEvent_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.rightSidebar($event)); });
    i0.ɵɵelementEnd();
} }
function ContentLayoutComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("mouseenter", function ContentLayoutComponent_Conditional_5_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSidebarHover()); })("mouseleave", function ContentLayoutComponent_Conditional_5_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSidebarLeave()); });
    i0.ɵɵelement(1, "app-sidebar");
    i0.ɵɵelementStart(2, "aside", 14);
    i0.ɵɵelement(3, "app-right-sidebar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-collapsed", ctx_r1.navServices.collapseSidebar)("is-hovered", ctx_r1.isHovered);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("show", ctx_r1.right_side_bar);
} }
function ContentLayoutComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "app-right-sidebar-mob");
    i0.ɵɵelementEnd();
} }
export class ContentLayoutComponent {
    onResize(event) {
        this.showMobView = this.env.deviceType();
        this.updateHideForBreadcrumb(); // Update breadcrumb visibility when view changes
        this.cdr.markForCheck();
    }
    constructor(navServices, env, auth, commondata, config, cdr, ngZone, appRef) {
        this.navServices = navServices;
        this.env = env;
        this.auth = auth;
        this.commondata = commondata;
        this.config = config;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.appRef = appRef;
        this.right_side_bar = false;
        this.layoutType = 'RTL';
        this.layoutClass = false;
        this.isHovered = false;
        this.showMobView = false;
        this.hideForBreadcrumb = true; // Initialize as property instead of getter
        this.creatorService = inject(CreatorService);
        this.imgUrl = this.config.getimgUrl();
        this.profile = this.auth.getSessionData('profile_url');
        this.showMobView = this.env.deviceType();
        this.creatorService.contentView.subscribe((res) => {
            // Use proper change detection to avoid assertion errors
            this.ngZone.run(() => {
                this.isHovered = !(res == true);
                this.auth.setSideBarOpened(this.isHovered);
                this.cdr.markForCheck(); // Use markForCheck for OnPush strategy to avoid infinite loops
            });
        });
        this.commondata.loader.pipe(takeUntilDestroyed()).subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    onSidebarHover() {
        if (this.navServices.collapseSidebar) {
            this.isHovered = true;
            this.auth.setSideBarOpened(true);
            this.cdr.markForCheck();
        }
    }
    onSidebarLeave() {
        if (this.navServices.collapseSidebar) {
            this.isHovered = false;
            this.auth.setSideBarOpened(false);
            this.cdr.markForCheck();
        }
    }
    rightSidebar($event) {
        this.right_side_bar = $event;
        this.cdr.markForCheck();
    }
    clickRtl(val) {
        if (val === 'RTL') {
            document.body.className = 'rtl';
            this.layoutClass = true;
            this.layoutType = 'LTR';
        }
        else {
            document.body.className = '';
            this.layoutClass = false;
            this.layoutType = 'RTL';
        }
        this.cdr.markForCheck();
    }
    ngOnInit() {
        // Initialize properties to avoid ExpressionChangedAfterItHasBeenCheckedError
        this.allowDashboard = this.auth.getSessionData('default_password');
        this.right_side_bar = false; // Initialize to prevent undefined state
        this.layoutClass = false; // Initialize to prevent undefined state
        // Calculate hideForBreadcrumb value
        this.updateHideForBreadcrumb();
    }
    updateHideForBreadcrumb() {
        const url = window.location.href;
        this.hideForBreadcrumb = !this.showMobView && (!url.includes('student/dashboard') && !url.includes('report/report') &&
            !url.includes('studentlogin/answering') && !url.includes('sat-report'));
    }
    static { this.ɵfac = function ContentLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentLayoutComponent)(i0.ɵɵdirectiveInject(i1.NavService), i0.ɵɵdirectiveInject(i2.EnvironmentService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.CommonDataService), i0.ɵɵdirectiveInject(i5.ConfigurationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ApplicationRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], hostBindings: function ContentLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ContentLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 7, consts: [[1, "app-shell", "enterprise-layout"], ["id", "pre-loader", 4, "ngIf"], [1, "app-shell__body"], [1, "app-shell__sidebar", 3, "is-collapsed", "is-hovered"], [1, "app-shell__sidebar", "app-shell__sidebar--mobile"], [1, "app-shell__content"], [1, "app-main"], [1, "app-main__container", "container-fluid"], [1, "app-footer"], [1, "app-footer__inner"], ["id", "pre-loader"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", "Loading"], [3, "rightSidebarEvent"], [1, "app-shell__sidebar", 3, "mouseenter", "mouseleave"], [1, "app-shell__right-rail"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ContentLayoutComponent_div_1_Template, 2, 0, "div", 1)(2, ContentLayoutComponent_Conditional_2_Template, 1, 0, "app-header2")(3, ContentLayoutComponent_Conditional_3_Template, 1, 0, "app-header");
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵtemplate(5, ContentLayoutComponent_Conditional_5_Template, 4, 6, "div", 3)(6, ContentLayoutComponent_Conditional_6_Template, 2, 0, "div", 4);
            i0.ɵɵelementStart(7, "div", 5)(8, "main", 6)(9, "div", 7);
            i0.ɵɵelement(10, "router-outlet");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "footer", 8)(12, "div", 9);
            i0.ɵɵelement(13, "app-footer");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.commondata.loader.value);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showMobView ? 2 : 3);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("with-collapsed-sidebar", ctx.navServices.collapseSidebar && !ctx.showMobView);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.showMobView ? 5 : 6);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("hovered", ctx.isHovered && !ctx.showMobView);
        } }, dependencies: [CommonModule, i6.NgIf, RouterModule, i7.RouterOutlet, HeaderComponent,
            Header2Component,
            SidebarComponent,
            RightSidebarComponent,
            RightSidebarMobComponent,
            FooterComponent], styles: [".app-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: var(--neutral-100);\n  display: flex;\n  flex-direction: column;\n}\n\n#pre-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.85);\n  z-index: 1050;\n}\n\n.app-shell__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: calc(100vh - 64px);\n  transition: all var(--transition-base) ease;\n\n  &.with-collapsed-sidebar .app-main__container {\n    padding-left: var(--spacing-4);\n    padding-right: var(--spacing-4);\n  }\n}\n\n.app-shell__sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  transition: all var(--transition-base) ease;\n\n  &--mobile {\n    width: 100%;\n  }\n\n  .app-shell__right-rail {\n    position: absolute;\n    top: 1rem;\n    right: -320px;\n    width: 300px;\n    height: calc(100vh - 96px);\n    background: #fff;\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(10px);\n    opacity: 0;\n    pointer-events: none;\n    transition: all var(--transition-base) ease;\n\n    &.show {\n      transform: translateX(0);\n      opacity: 1;\n      pointer-events: auto;\n    }\n  }\n}\n\n.app-shell__content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  background: linear-gradient(180deg, rgba(142, 68, 173, 0.05) 0%, rgba(255, 255, 255, 0.95) 40%);\n  padding: 0.75rem 1rem;\n  transition: padding var(--transition-base) ease;\n\n  &.hovered {\n    padding-left: 1.5rem;\n  }\n}\n\n.app-main[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n\n  &__container {\n    flex: 1 1 auto;\n    background: rgba(255, 255, 255, 0.98);\n    border-radius: 8px;\n    padding: 0.75rem 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  }\n}\n\n.app-footer[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-6);\n  padding: var(--spacing-4) 0;\n\n  &__inner {\n    background: #fff;\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--neutral-200);\n    padding: var(--spacing-3) var(--spacing-4);\n    box-shadow: var(--shadow-sm);\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .app-shell__content[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.875rem;\n  }\n\n  .app-main__container[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.875rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .app-shell__body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .app-shell__sidebar--mobile[_ngcontent-%COMP%] {\n    order: 2;\n  }\n\n  .app-shell__content[_ngcontent-%COMP%] {\n    order: 1;\n    padding: 0.5rem 0.75rem;\n  }\n  \n  .app-main__container[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-content-layout', standalone: true, imports: [
                    CommonModule,
                    RouterModule,
                    HeaderComponent,
                    Header2Component,
                    SidebarComponent,
                    RightSidebarComponent,
                    RightSidebarMobComponent,
                    BreadcrumbComponent,
                    FooterComponent
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"app-shell enterprise-layout\">\n  <div id=\"pre-loader\" *ngIf=\"commondata.loader.value\">\n    <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"Loading\" />\n  </div>\n\n  @if (showMobView) {\n    <app-header2></app-header2>\n  } @else {\n    <app-header (rightSidebarEvent)=\"rightSidebar($event)\"></app-header>\n  }\n\n  <div class=\"app-shell__body\" [class.with-collapsed-sidebar]=\"navServices.collapseSidebar && !showMobView\">\n    @if (!showMobView) {\n      <div\n        class=\"app-shell__sidebar\"\n        [class.is-collapsed]=\"navServices.collapseSidebar\"\n        [class.is-hovered]=\"isHovered\"\n        (mouseenter)=\"onSidebarHover()\"\n        (mouseleave)=\"onSidebarLeave()\"\n      >\n        <app-sidebar></app-sidebar>\n        <aside class=\"app-shell__right-rail\" [class.show]=\"right_side_bar\">\n          <app-right-sidebar></app-right-sidebar>\n        </aside>\n      </div>\n    } @else {\n      <div class=\"app-shell__sidebar app-shell__sidebar--mobile\">\n        <app-right-sidebar-mob></app-right-sidebar-mob>\n      </div>\n    }\n\n    <div class=\"app-shell__content\" [class.hovered]=\"isHovered && !showMobView\">\n      <main class=\"app-main\">\n        <div class=\"app-main__container container-fluid\">\n          <router-outlet></router-outlet>\n        </div>\n      </main>\n\n      <footer class=\"app-footer\">\n        <div class=\"app-footer__inner\">\n          <app-footer></app-footer>\n        </div>\n      </footer>\n    </div>\n  </div>\n</div>\n", styles: [".app-shell {\n  min-height: 100vh;\n  background-color: var(--neutral-100);\n  display: flex;\n  flex-direction: column;\n}\n\n#pre-loader {\n  position: fixed;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.85);\n  z-index: 1050;\n}\n\n.app-shell__body {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: calc(100vh - 64px);\n  transition: all var(--transition-base) ease;\n\n  &.with-collapsed-sidebar .app-main__container {\n    padding-left: var(--spacing-4);\n    padding-right: var(--spacing-4);\n  }\n}\n\n.app-shell__sidebar {\n  position: relative;\n  flex: 0 0 auto;\n  transition: all var(--transition-base) ease;\n\n  &--mobile {\n    width: 100%;\n  }\n\n  .app-shell__right-rail {\n    position: absolute;\n    top: 1rem;\n    right: -320px;\n    width: 300px;\n    height: calc(100vh - 96px);\n    background: #fff;\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-lg);\n    transform: translateX(10px);\n    opacity: 0;\n    pointer-events: none;\n    transition: all var(--transition-base) ease;\n\n    &.show {\n      transform: translateX(0);\n      opacity: 1;\n      pointer-events: auto;\n    }\n  }\n}\n\n.app-shell__content {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  background: linear-gradient(180deg, rgba(142, 68, 173, 0.05) 0%, rgba(255, 255, 255, 0.95) 40%);\n  padding: 0.75rem 1rem;\n  transition: padding var(--transition-base) ease;\n\n  &.hovered {\n    padding-left: 1.5rem;\n  }\n}\n\n.app-main {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n\n  &__container {\n    flex: 1 1 auto;\n    background: rgba(255, 255, 255, 0.98);\n    border-radius: 8px;\n    padding: 0.75rem 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  }\n}\n\n.app-footer {\n  margin-top: var(--spacing-6);\n  padding: var(--spacing-4) 0;\n\n  &__inner {\n    background: #fff;\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--neutral-200);\n    padding: var(--spacing-3) var(--spacing-4);\n    box-shadow: var(--shadow-sm);\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .app-shell__content {\n    padding: 0.625rem 0.875rem;\n  }\n\n  .app-main__container {\n    padding: 0.625rem 0.875rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .app-shell__body {\n    flex-direction: column;\n  }\n\n  .app-shell__sidebar--mobile {\n    order: 2;\n  }\n\n  .app-shell__content {\n    order: 1;\n    padding: 0.5rem 0.75rem;\n  }\n  \n  .app-main__container {\n    padding: 0.5rem 0.75rem;\n  }\n}\n"] }]
    }], () => [{ type: i1.NavService }, { type: i2.EnvironmentService }, { type: i3.AuthService }, { type: i4.CommonDataService }, { type: i5.ConfigurationService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.ApplicationRef }], { onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContentLayoutComponent, { className: "ContentLayoutComponent" }); })();
//# sourceMappingURL=content-layout.component.js.map