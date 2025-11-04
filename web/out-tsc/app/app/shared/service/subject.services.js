import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SubjectServices {
    constructor(http) {
        this.http = http;
        this.profileList = new BehaviorSubject('');
        this.cast = this.profileList.asObservable();
    }
    changeProfile(data) {
        this.profileList.next(data);
    }
    getSubjectList(data) {
        const json = JSON.stringify(data);
        const url = 'subject/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    subjectAdd(data) {
        const json = JSON.stringify(data);
        const url = 'subject/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    subjectEdit(data) {
        const json = JSON.stringify(data);
        const url = 'subject/edit';
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
    static { this.ɵfac = function SubjectServices_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubjectServices)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubjectServices, factory: SubjectServices.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubjectServices, [{
        type: Injectable
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=subject.services.js.map