import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';
import * as i0 from "@angular/core";
export class FeatherIconsComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
            feather.replace();
        });
    }
    static { this.ɵfac = function FeatherIconsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeatherIconsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeatherIconsComponent, selectors: [["app-feather-icons"]], inputs: { icon: "icon" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, template: function FeatherIconsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "i");
        } if (rf & 2) {
            i0.ɵɵattribute("data-feather", ctx.icon);
        } }, dependencies: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeatherIconsComponent, [{
        type: Component,
        args: [{ selector: 'app-feather-icons', standalone: true, imports: [CommonModule], template: "<i [attr.data-feather]=\"icon\"></i>" }]
    }], () => [], { icon: [{
            type: Input,
            args: ['icon']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeatherIconsComponent, { className: "FeatherIconsComponent" }); })();
//# sourceMappingURL=feather-icons.component.js.map