import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function CrmShellComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵelement(1, "i", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", tab_r1.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", tab_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r1.label, " ");
} }
export class CrmShellComponent {
    constructor() {
        this.tabs = [
            { label: 'Guardians', link: 'guardians', icon: 'bi-people-fill' },
            { label: 'Fees', link: 'fees', icon: 'bi-currency-dollar' },
            { label: 'Notifications', link: 'notifications', icon: 'bi-chat-square-text' },
            { label: 'Report Cards', link: 'reports', icon: 'bi-file-earmark-text' }
        ];
    }
    static { this.ɵfac = function CrmShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmShellComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CrmShellComponent, selectors: [["app-crm-shell"]], decls: 6, vars: 1, consts: [[1, "crm-shell"], [1, "crm-shell__tabs"], [1, "nav", "nav-pills"], ["class", "nav-link", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "crm-shell__content", "mt-4"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "bi", "me-2", 3, "ngClass"]], template: function CrmShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2);
            i0.ɵɵtemplate(3, CrmShellComponent_a_3_Template, 3, 3, "a", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "router-outlet");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i2.RouterOutlet, i2.RouterLink, i2.RouterLinkActive], styles: [".crm-shell[_ngcontent-%COMP%] {\n  &__tabs {\n    .nav-link {\n      margin-right: 0.5rem;\n      display: flex;\n      align-items: center;\n      padding: 0.5rem 1rem;\n      border-radius: 999px;\n      color: #495057;\n      background-color: #f8f9fa;\n\n      &.active {\n        background-color: #0d6efd;\n        color: #fff;\n      }\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmShellComponent, [{
        type: Component,
        args: [{ selector: 'app-crm-shell', template: "<div class=\"crm-shell\">\n  <div class=\"crm-shell__tabs\">\n    <nav class=\"nav nav-pills\">\n      <a\n        *ngFor=\"let tab of tabs\"\n        class=\"nav-link\"\n        [routerLink]=\"tab.link\"\n        routerLinkActive=\"active\"\n      >\n        <i class=\"bi me-2\" [ngClass]=\"tab.icon\"></i>\n        {{ tab.label }}\n      </a>\n    </nav>\n  </div>\n  <div class=\"crm-shell__content mt-4\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n", styles: [".crm-shell {\n  &__tabs {\n    .nav-link {\n      margin-right: 0.5rem;\n      display: flex;\n      align-items: center;\n      padding: 0.5rem 1rem;\n      border-radius: 999px;\n      color: #495057;\n      background-color: #f8f9fa;\n\n      &.active {\n        background-color: #0d6efd;\n        color: #fff;\n      }\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CrmShellComponent, { className: "CrmShellComponent" }); })();
//# sourceMappingURL=crm-shell.component.js.map