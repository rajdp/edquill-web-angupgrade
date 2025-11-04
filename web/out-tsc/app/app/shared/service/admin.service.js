import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "./configuration.service";
import * as i3 from "@angular/common/http";
export class AdminService {
    constructor(authService, configurationService, http) {
        this.authService = authService;
        this.configurationService = configurationService;
        this.http = http;
    }
    adminList(data) {
        const json = JSON.stringify(data);
        const url = 'user/adminList';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    adminAdd(data) {
        const json = JSON.stringify(data);
        const url = 'school/addAdmin';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    adminEdit(data) {
        const json = JSON.stringify(data);
        const url = 'user/editStatus';
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
    static { this.ɵfac = function AdminService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminService)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.ConfigurationService), i0.ɵɵinject(i3.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.AuthService }, { type: i2.ConfigurationService }, { type: i3.HttpClient }], null); })();
//# sourceMappingURL=admin.service.js.map