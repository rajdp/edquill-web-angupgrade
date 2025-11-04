import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class NewsubjectService {
    constructor() {
        this.schoolChange = new BehaviorSubject('');
        this.schoollist = this.schoolChange.asObservable();
        this.sideBar = new BehaviorSubject('');
        this.highlightMenu = this.sideBar.asObservable();
        this.allowChange = new BehaviorSubject('');
        this.allowedlist = this.allowChange.asObservable();
        this.changeNav = new BehaviorSubject('');
        this.navUpdate = this.changeNav.asObservable();
        this.dateFormat = new BehaviorSubject('');
        this.globalDateFormat = this.dateFormat.asObservable();
        this.timeZone = new BehaviorSubject('');
        this.globalTimeZone = this.dateFormat.asObservable();
    }
    changeDateFormat(data) {
        // dateOptions.pickerFormat = data.toLowerCase();
        localStorage.setItem('currentFormat', data);
        this.dateFormat.next(data);
    }
    changeTimeZone(data) {
        localStorage.setItem('currentLocation', data);
        this.timeZone.next(data);
    }
    changeSchoolList(data) {
        this.schoolChange.next(data);
    }
    allowSchoolChange(data) {
        this.allowChange.next(data);
    }
    newNav(data) {
        this.changeNav.next(data);
    }
    highListSideBarMenu(data) {
        this.sideBar.next(data);
    }
    static { this.ɵfac = function NewsubjectService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NewsubjectService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NewsubjectService, factory: NewsubjectService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewsubjectService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=newsubject.service.js.map