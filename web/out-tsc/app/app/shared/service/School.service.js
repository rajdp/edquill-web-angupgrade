import { throwError as observableThrowError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SchoolService {
    constructor(http) {
        this.http = http;
        this.corporateSchoolView = new BehaviorSubject('');
        this.list = this.corporateSchoolView.asObservable();
    }
    changeSideCorporateSchoolList(data) {
        this.corporateSchoolView.next(data);
    }
    deleteUser(data) {
        const json = JSON.stringify(data);
        const url = 'user/remove';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    getSchoolList(data) {
        const json = JSON.stringify(data);
        const url = 'school/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    brandAdd(data) {
        const json = JSON.stringify(data);
        const url = 'school/registration';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    brandEdit(data) {
        const json = JSON.stringify(data);
        const url = 'school/edit';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    extractData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        let errMsg;
        if (error instanceof Response) {
            // const body = error.json() || '';
            const err = error || JSON.stringify(error);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return observableThrowError(error);
    }
    static { this.ɵfac = function SchoolService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SchoolService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SchoolService, factory: SchoolService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchoolService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=School.service.js.map