import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./auth.service";
import * as i3 from "./configuration.service";
export class BookService {
    constructor(http, authService, configurationService) {
        this.http = http;
        this.authService = authService;
        this.configurationService = configurationService;
    }
    getBookList(data) {
        const json = JSON.stringify(data);
        const url = 'book/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    gradeList(data) {
        const json = JSON.stringify(data);
        const url = 'grade/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    subjectList(data) {
        const json = JSON.stringify(data);
        const url = 'subject/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    addBook(data) {
        const json = JSON.stringify(data);
        const url = 'book/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    editBook(data) {
        const json = JSON.stringify(data);
        const url = 'book/edit';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    extractData(res) {
        const body = res;
        return body || {};
    }
    getSettingsList(data) {
        const json = JSON.stringify(data);
        const token = this.authService.getAccessToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'accesstoken': token
            })
        };
        const url = this.configurationService.getHost() + 'settings/list';
        return this.http.post(url, json, httpOptions).pipe(map(this.extractData), catchError(this.handleError));
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
    static { this.ɵfac = function BookService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BookService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.ConfigurationService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BookService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AuthService }, { type: i3.ConfigurationService }], null); })();
//# sourceMappingURL=book.service.js.map