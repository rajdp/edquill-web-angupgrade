import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AnsweringGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        let can = component.guard;
        console.log(can, 'permit');
        if (can == true) {
            let pop = confirm('You have not saved your answers. Are you sure do you want to navigate from this page?');
            if (pop == true) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    static { this.ɵfac = function AnsweringGuard_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnsweringGuard)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnsweringGuard, factory: AnsweringGuard.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnsweringGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=answering.guard.js.map