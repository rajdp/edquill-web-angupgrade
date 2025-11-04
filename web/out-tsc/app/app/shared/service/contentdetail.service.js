import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ContentdetailService {
    constructor(http) {
        this.http = http;
    }
    passageAllService(data, type) {
        const json = JSON.stringify(data);
        const url = 'content/' + type + 'Passage';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    studentContent(data) {
        const json = JSON.stringify(data);
        const url = 'teacher/studentAssessment';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    classList(data) {
        const json = JSON.stringify(data);
        const url = 'teacher/studentCorrectionList';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    notesList(data) {
        const json = JSON.stringify(data);
        const url = 'feedback/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    notesAdd(data) {
        const json = JSON.stringify(data);
        const url = 'feedback/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    notesDelete(data) {
        const json = JSON.stringify(data);
        const url = 'feedback/delete';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    notifiyParent(data) {
        const json = JSON.stringify(data);
        const url = 'teacher/notifyParents';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    notifiyAllParent(data) {
        const json = JSON.stringify(data);
        const url = 'teacher/notifyAllStudentParents';
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
    static { this.ɵfac = function ContentdetailService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentdetailService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContentdetailService, factory: ContentdetailService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentdetailService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=contentdetail.service.js.map