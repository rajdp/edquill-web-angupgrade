import { throwError as observableThrowError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LoginService {
    constructor(http) {
        this.http = http;
        this.homeList = new BehaviorSubject('');
        this.cast = this.homeList.asObservable();
    }
    changeHomePage(data) {
        this.homeList.next(data);
    }
    logout() {
        const url = 'auth/logout';
        return this.http.get(url);
    }
    login(data) {
        const json = JSON.stringify(data);
        const url = 'user/login';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    tcUpdateList(data) {
        const json = JSON.stringify(data);
        const url = 'user/tcUpdate';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    corporateLogin(data) {
        const json = JSON.stringify(data);
        const url = 'corporate/login';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    forgotPassword(data) {
        const json = JSON.stringify(data);
        const url = 'user/forgotPassword';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    changePassword(data) {
        const json = JSON.stringify(data);
        const url = 'user/setPassword';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    changeForgotPassword(data) {
        const json = JSON.stringify(data);
        const url = 'user/resetPassword';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    selectSchool(data) {
        const json = JSON.stringify(data);
        const url = 'user/forgotPassword';
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
    static { this.ɵfac = function LoginService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=login.service.js.map