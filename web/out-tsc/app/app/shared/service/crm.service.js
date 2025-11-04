import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CrmService {
    constructor(http) {
        this.http = http;
    }
    listGuardians(payload) {
        return this.post('crm/guardians/list', payload);
    }
    saveGuardian(payload) {
        return this.post('crm/guardians/save', payload);
    }
    assignGuardian(payload) {
        return this.post('crm/guardians/assign', payload);
    }
    removeGuardian(payload) {
        return this.post('crm/guardians/remove', payload);
    }
    listFeePlans(payload) {
        return this.post('crm/fees/plans', payload);
    }
    saveFeePlan(payload) {
        return this.post('crm/fees/plan/save', payload);
    }
    assignFeePlan(payload) {
        return this.post('crm/fees/assign', payload);
    }
    recordPayment(payload) {
        return this.post('crm/fees/payment', payload);
    }
    studentOverview(payload) {
        return this.post('crm/fees/student-overview', payload);
    }
    generateInvoice(payload) {
        return this.post('crm/fees/invoice', payload);
    }
    listTemplates(payload) {
        return this.post('crm/notifications/templates', payload);
    }
    saveTemplate(payload) {
        return this.post('crm/notifications/template/save', payload);
    }
    queueNotification(payload) {
        return this.post('crm/notifications/queue', payload);
    }
    listNotifications(payload) {
        return this.post('crm/notifications/list', payload);
    }
    setOptout(payload) {
        return this.post('crm/notifications/optout', payload);
    }
    listExams(payload) {
        return this.post('crm/report/exams', payload);
    }
    saveExam(payload) {
        return this.post('crm/report/exam/save', payload);
    }
    saveScores(payload) {
        return this.post('crm/report/scores/save', payload);
    }
    getScores(payload) {
        return this.post('crm/report/scores', payload);
    }
    generateReport(payload) {
        return this.post('crm/report/generate', payload);
    }
    shareReport(payload) {
        return this.post('crm/report/share', payload);
    }
    viewReport(token) {
        return this.http.get(`crm/report/view/${token}`).pipe(map(this.extractData), catchError(this.handleError));
    }
    post(url, payload) {
        const json = JSON.stringify(payload);
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    extractData(res) {
        return res || {};
    }
    handleError(error) {
        let errMsg;
        if (error && error.status) {
            errMsg = `${error.status} - ${error.statusText || ''}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return throwError(() => errMsg);
    }
    static { this.ɵfac = function CrmService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CrmService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CrmService, factory: CrmService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CrmService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=crm.service.js.map