import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ContentService {
    constructor(http) {
        this.http = http;
    }
    contentAdd(data) {
        const json = JSON.stringify(data);
        const url = 'contentcreator/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    contentEdit(data) {
        const json = JSON.stringify(data);
        const url = 'contentcreator/edit';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    contentList(data) {
        const json = JSON.stringify(data);
        const url = 'contentcreator/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    contentQuestion(data) {
        const json = JSON.stringify(data);
        const url = 'content/questiontypes';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    answerKeyRequestList(data) {
        const json = JSON.stringify(data);
        const url = 'content/answerkeyRequestList';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    updateRequestList(data) {
        const json = JSON.stringify(data);
        const url = 'content/updateAnswerKey';
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
    static { this.ɵfac = function ContentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContentService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContentService, factory: ContentService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=content.service.js.map