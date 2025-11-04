import { Directive, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
import * as i0 from "@angular/core";
export class ToggleFullscreenDirective {
    onClick() {
        if (screenfull.isEnabled) {
            screenfull.toggle();
        }
    }
    static { this.ɵfac = function ToggleFullscreenDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToggleFullscreenDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ToggleFullscreenDirective, selectors: [["", "toggleFullscreen", ""]], hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ToggleFullscreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToggleFullscreenDirective, [{
        type: Directive,
        args: [{
                selector: '[toggleFullscreen]',
                standalone: true
            }]
    }], null, { onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=fullscreen.directive.js.map