import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CorporateService {
    constructor(http) {
        this.http = http;
    }
    getRequestList(data) {
        const json = JSON.stringify(data);
        const url = 'corporate/requestList';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    setRequestCode(data) {
        const json = JSON.stringify(data);
        const url = 'corporate/request';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    editRequestDetails(data) {
        const json = JSON.stringify(data);
        const url = 'corporate/response';
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
    static { this.ɵfac = function CorporateService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CorporateService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CorporateService, factory: CorporateService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CorporateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=corporate.service.js.map