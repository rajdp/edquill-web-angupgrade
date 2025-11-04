import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CommonDataService {
    constructor() {
        this.loader = new BehaviorSubject(false);
    }
    showLoader(value) {
        this.loader.next(value);
    }
    setExpandDiv(id) {
        document.getElementById(id).setAttribute('class', 'collapse show');
        document.getElementById(id).previousElementSibling.setAttribute('aria-expanded', 'true');
    }
    static { this.ɵfac = function CommonDataService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommonDataService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CommonDataService, factory: CommonDataService.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonDataService, [{
        type: Injectable
    }], () => [], null); })();
//# sourceMappingURL=common-data.service.js.map