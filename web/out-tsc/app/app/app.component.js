import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ConnectionService } from 'ng-connection-service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { EnvironmentService } from './environment.service';
import { ZoomServiceService } from './shared/service/zoom-service.service';
import { AuthService } from './shared/service/auth.service';
import * as i0 from "@angular/core";
function AppComponent_Conditional_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵelement(2, "i", 7);
    i0.ɵɵelementStart(3, "span", 8);
    i0.ɵɵtext(4, "Your internet connection is unstable");
    i0.ɵɵelementEnd()()();
} }
function AppComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "router-outlet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelement(3, "div", 3)(4, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AppComponent_Conditional_0_Conditional_5_Template, 5, 0, "div", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("offline", !ctx_r0.hasInternet());
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(!ctx_r0.hasInternet() ? 5 : -1);
} }
function AppComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 5)(2, "div", 6);
    i0.ɵɵelement(3, "i", 7);
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5, "Your internet connection is unstable");
    i0.ɵɵelementEnd()()()();
} }
export class AppComponent {
    constructor() {
        this.envService = inject(EnvironmentService);
        this.deviceService = inject(DeviceDetectorService);
        this.titleService = inject(Title);
        this.connectionService = inject(ConnectionService);
        this.zoomService = inject(ZoomServiceService);
        this.cdr = inject(ChangeDetectorRef);
        this.router = inject(Router);
        this.auth = inject(AuthService);
        this.allow = signal(false);
        this.zoomAllowed = signal(true);
        this.hasInternet = signal(true);
        this.favIcon = document.querySelector('#appIcon');
        const url = window.location.href;
        this.configureBranding(url);
        this.connectionService.monitor().subscribe(isConnected => {
            this.hasInternet.set(isConnected.hasNetworkConnection);
            this.cdr.detectChanges();
        });
        this.envService.envRecieved.subscribe(res => {
            this.allow.set(res);
            this.cdr.detectChanges();
        });
        this.zoomService.cast.subscribe(data => {
            if (data === true) {
                window.location.reload();
                this.cdr.detectChanges();
            }
        });
        this.handleInitialNavigation(url);
    }
    configureBranding(url) {
        if (!this.favIcon) {
            return;
        }
        if (url.includes('xtracurriculum')) {
            this.favIcon.href = 'assets/xtraCurriculum.ico';
            this.titleService.setTitle('XtraCurriculum');
        }
        else if (url.includes('safeteen')) {
            this.favIcon.href = 'assets/safeteen.png';
            this.titleService.setTitle('Safeteens - by the Teens for the Teens');
        }
        else if (url.includes('elevenace')) {
            this.favIcon.href = 'assets/elevenAce.ico';
            this.titleService.setTitle('ElevenAce');
        }
        else if (url.includes('uniqprep')) {
            this.favIcon.href = 'assets/uniqprep.png';
            this.titleService.setTitle('Uniq Prep');
        }
        else if (url.includes('edveda')) {
            this.favIcon.href = 'assets/edquill.ico';
            this.titleService.setTitle('EdVeda');
        }
        else if (url.includes('localhost') || url.includes('uthkal') || url.includes('edquill')) {
            this.favIcon.href = 'assets/edquill.ico';
            this.titleService.setTitle('EdQuill');
        }
    }
    handleInitialNavigation(url) {
        const checkForForgotPassword = url.includes('forgotPassword');
        const checkForSetPassword = url.includes('setPassword');
        const checkEnrollClassCode = url.includes('enrollclasscode');
        const checkStudentRegister = url.includes('studentRegister');
        const viewPDF = url.includes('viewAnswerKeyPdf');
        const preview = url.includes('contentFolder/preview');
        const googleSignIn = url.includes('googleSignIn');
        const googleStudentRegister = url.includes('googleStudentRegister');
        const tutorConnect = url.includes('tutorconnect');
        const checkForIPADApp = url.includes('student-annotation') || url.includes('source-link') ||
            url.includes('student-scratch') || url.includes('graphing') || url.includes('ipad-question-view');
        if (checkForForgotPassword || checkEnrollClassCode || checkStudentRegister || viewPDF || preview ||
            googleSignIn || googleStudentRegister || tutorConnect || checkForSetPassword) {
            return;
        }
        const splitUrl = url.split('#');
        if (this.auth.loggedIn()) {
            if (splitUrl.length === 1 || (splitUrl.length === 2 && ['', '/'].includes(splitUrl[1]))) {
                this.navigateByRole();
            }
            else {
                this.router.navigate([splitUrl[1]]);
            }
        }
        else if (this.deviceService.getDeviceInfo().os !== 'iOS' &&
            (this.deviceService.getDeviceInfo().os !== 'Mac' || !this.deviceService.isTablet())) {
            if (!checkForIPADApp) {
                this.router.navigate(['/auth/login']);
            }
        }
        else if (!checkForIPADApp) {
            this.router.navigate(['/auth/login']);
        }
    }
    navigateByRole() {
        const roleId = this.auth.getRoleId();
        if (['1', '2', '4'].includes(roleId)) {
            this.router.navigate(['/class/list-class']);
        }
        else if (roleId === '3') {
            this.router.navigate(['/repository/content-home']);
        }
        else if (roleId === '5') {
            this.router.navigate(['/student/dashboard']);
        }
        else if (roleId === '6') {
            this.router.navigate(['/dashboard/default']);
        }
        else if (roleId === '7') {
            this.router.navigate(['/student-content/list-content/old']);
        }
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 2, consts: [[1, "app-shell", "offline"], [1, "app-shell"], [1, "floating"], ["id", "meetingSDKElement"], ["id", "meetingSDKChatElement"], [1, "network-overlay"], [1, "network-banner", "alert", "alert-danger", "d-flex", "align-items-center", "justify-content-center", "gap-2"], [1, "bi", "bi-wifi-off", "fs-5"], [1, "fw-semibold"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AppComponent_Conditional_0_Template, 6, 3)(1, AppComponent_Conditional_1_Template, 6, 0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.allow() && ctx.zoomAllowed() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.allow() ? 1 : -1);
        } }, dependencies: [CommonModule, RouterOutlet], styles: [".app-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--neutral-50);\n  transition: filter var(--transition-base) ease, opacity var(--transition-base) ease;\n\n  &.offline {\n    pointer-events: none;\n    filter: grayscale(0.35);\n    opacity: 0.8;\n  }\n}\n\n.floating[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 64px;\n  right: var(--spacing-4);\n  z-index: 1050;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2);\n\n  #meetingSDKElement,\n  #meetingSDKChatElement {\n    border-radius: var(--radius-md);\n    box-shadow: var(--shadow-lg);\n    overflow: hidden;\n    max-width: min(320px, 90vw);\n  }\n}\n\n.network-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: var(--spacing-6);\n  background: linear-gradient(180deg, rgba(33, 37, 41, 0.22) 0%, rgba(33, 37, 41, 0.05) 100%);\n  z-index: 2000;\n\n  .network-banner {\n    pointer-events: auto;\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-lg);\n    text-transform: none;\n    letter-spacing: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .floating[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: var(--spacing-4);\n    right: var(--spacing-3);\n    left: var(--spacing-3);\n  }\n\n  .network-overlay[_ngcontent-%COMP%] {\n    padding-top: var(--spacing-4);\n\n    .network-banner {\n      width: 100%;\n      margin: 0 var(--spacing-3);\n      text-align: center;\n      font-size: 0.95rem;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, RouterOutlet], template: "@if (allow() && zoomAllowed()) {\n  <div class=\"app-shell\" [class.offline]=\"!hasInternet()\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"floating\">\n    <div id=\"meetingSDKElement\"></div>\n    <div id=\"meetingSDKChatElement\"></div>\n  </div>\n\n  @if (!hasInternet()) {\n    <div class=\"network-overlay\">\n      <div class=\"network-banner alert alert-danger d-flex align-items-center justify-content-center gap-2\">\n        <i class=\"bi bi-wifi-off fs-5\"></i>\n        <span class=\"fw-semibold\">Your internet connection is unstable</span>\n      </div>\n    </div>\n  }\n}\n\n@if (!allow()) {\n  <div class=\"app-shell offline\">\n    <div class=\"network-overlay\">\n      <div class=\"network-banner alert alert-danger d-flex align-items-center justify-content-center gap-2\">\n        <i class=\"bi bi-wifi-off fs-5\"></i>\n        <span class=\"fw-semibold\">Your internet connection is unstable</span>\n      </div>\n    </div>\n  </div>\n}\n", styles: [".app-shell {\n  min-height: 100vh;\n  background: var(--neutral-50);\n  transition: filter var(--transition-base) ease, opacity var(--transition-base) ease;\n\n  &.offline {\n    pointer-events: none;\n    filter: grayscale(0.35);\n    opacity: 0.8;\n  }\n}\n\n.floating {\n  position: fixed;\n  top: 64px;\n  right: var(--spacing-4);\n  z-index: 1050;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2);\n\n  #meetingSDKElement,\n  #meetingSDKChatElement {\n    border-radius: var(--radius-md);\n    box-shadow: var(--shadow-lg);\n    overflow: hidden;\n    max-width: min(320px, 90vw);\n  }\n}\n\n.network-overlay {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: var(--spacing-6);\n  background: linear-gradient(180deg, rgba(33, 37, 41, 0.22) 0%, rgba(33, 37, 41, 0.05) 100%);\n  z-index: 2000;\n\n  .network-banner {\n    pointer-events: auto;\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-lg);\n    text-transform: none;\n    letter-spacing: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .floating {\n    top: auto;\n    bottom: var(--spacing-4);\n    right: var(--spacing-3);\n    left: var(--spacing-3);\n  }\n\n  .network-overlay {\n    padding-top: var(--spacing-4);\n\n    .network-banner {\n      width: 100%;\n      margin: 0 var(--spacing-3);\n      text-align: center;\n      font-size: 0.95rem;\n    }\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent" }); })();
//# sourceMappingURL=app.component.js.map