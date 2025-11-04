import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./auth.service";
export class AssessmentService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    iconList(data) {
        const json = JSON.stringify(data);
        const url = 'content/question_types';
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
    static { this.ɵfac = function AssessmentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssessmentService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AssessmentService, factory: AssessmentService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssessmentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AuthService }], null); })();
//# sourceMappingURL=assessment.service.js.map