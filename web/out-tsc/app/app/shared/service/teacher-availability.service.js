import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { urls } from '../utils/urls';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TeacherAvailabilityService {
    constructor(http) {
        this.http = http;
    }
    list(params) {
        const httpParams = this.toHttpParams(params);
        return this.http.get(urls.teacherAvailability, { params: httpParams }).pipe(map(response => this.unwrapResponse(response)), catchError(this.handleError));
    }
    create(payload) {
        return this.http.post(urls.teacherAvailability, payload).pipe(map(response => this.unwrapResponse(response)), catchError(this.handleError));
    }
    update(id, payload) {
        return this.http.put(`${urls.teacherAvailability}/${id}`, payload).pipe(map(response => this.unwrapResponse(response)), catchError(this.handleError));
    }
    remove(id) {
        return this.http.delete(`${urls.teacherAvailability}/${id}`).pipe(map(response => this.unwrapResponse(response)), catchError(this.handleError));
    }
    adminList(params) {
        const httpParams = this.toHttpParams(params);
        return this.http.get(urls.teacherAvailabilityAdmin, { params: httpParams }).pipe(map(response => this.unwrapResponse(response)), catchError(this.handleError));
    }
    unwrapResponse(response) {
        if (response && response.IsSuccess) {
            return response.ResponseObject;
        }
        throw response?.ErrorObject || 'Unable to process request.';
    }
    handleError(error) {
        return throwError(() => error);
    }
    toHttpParams(params) {
        let httpParams = new HttpParams();
        if (!params) {
            return httpParams;
        }
        Object.keys(params).forEach(key => {
            const value = params[key];
            if (value !== undefined && value !== null && value !== '') {
                httpParams = httpParams.set(key, String(value));
            }
        });
        return httpParams;
    }
    static { this.ɵfac = function TeacherAvailabilityService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TeacherAvailabilityService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TeacherAvailabilityService, factory: TeacherAvailabilityService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TeacherAvailabilityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=teacher-availability.service.js.map