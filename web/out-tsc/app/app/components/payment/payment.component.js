import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import $ from 'jquery';
import * as i0 from "@angular/core";
export class PaymentComponent {
    constructor() { }
    ngOnInit() {
    }
    oncallback(e) {
        $.ajax({ url: 'https://sandbox.forte.net/checkout/v1/js', dataType: 'json' });
    }
    static { this.ɵfac = function PaymentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentComponent, selectors: [["app-payment"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 0, consts: [["id", "message", 2, "background-color", "#e5e5e5"], ["api_login_id", "fD74V1lSx2", "version_number", "1.0", "method", "sale", "total_amount", "{1375.23,1573.66,56.99,0|Total outstanding,Last statement balance,Minimum balance,Specify different amount};500.00", "utc_time", "638264891630612864", "signature", "5073ba22886c5616a0123c650fa7ce59", "order_number", "A1234", 3, "click"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("click", function PaymentComponent_Template_button_click_1_listener($event) { return ctx.oncallback($event); });
            i0.ɵɵtext(2, "Pay now");
            i0.ɵɵelementEnd();
        } }, dependencies: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentComponent, [{
        type: Component,
        args: [{ selector: 'app-payment', standalone: true, imports: [CommonModule], template: "<div id=\"message\" style=\"background-color:#e5e5e5\"></div>\n<button api_login_id=fD74V1lSx2\n        version_number=1.0\n        method=sale\t\ttotal_amount=\"{1375.23,1573.66,56.99,0|Total outstanding,Last statement balance,Minimum balance,Specify different amount};500.00\"\n        utc_time=638264891630612864\t\tsignature=5073ba22886c5616a0123c650fa7ce59\n        order_number=A1234\n        (click)=\"oncallback($event)\"\n>Pay now</button>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentComponent, { className: "PaymentComponent" }); })();
//# sourceMappingURL=payment.component.js.map