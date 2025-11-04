import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// interface DeactivateAnswering<T> {
//     DeactivateAnswering(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
// }
export class DeactivateAnswering {
    constructor() {
    }
    CanDeactivate(component) {
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
        return true;
    }
    static { this.ɵfac = function DeactivateAnswering_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DeactivateAnswering)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DeactivateAnswering, factory: DeactivateAnswering.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeactivateAnswering, [{
        type: Injectable
    }], () => [], null); })();
//# sourceMappingURL=answering-deactivate.js.map