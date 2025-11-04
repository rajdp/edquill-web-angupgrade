import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./common-data.service";
import * as i2 from "./auth.service";
import * as i3 from "../../environment.service";
import * as i4 from "ngx-toastr";
export class ServerHttpInterceptor {
    constructor(commondata, auth, configurationService, toastr) {
        this.commondata = commondata;
        this.auth = auth;
        this.configurationService = configurationService;
        this.toastr = toastr;
    }
    intercept(req, next) {
        // Skip interceptor for external URLs (CDN, APIs outside our backend)
        if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
            return next.handle(req);
        }
        const loader = this.auth.getSessionData('sse_loader') ?? 'false';
        if (['content/sortMaster', 'teacher/saveAnnotation', 'student/studentClassList', 'student/saveAnnotation', 'teacher/teacherCorrectionAnnotation',
            'teacher/teacherassignStudentPrint', 'report/studentReportClassPrint', 'teacher/saveAnswerSheetAnnotation', 'classes/addScheduleNotes',
            'mailbox/update', 'mailbox/list', 'mailbox/listMessages', 'classes/classDetail', 'content/addStudentAnswer', 'teacher/teacherCorrection',
            'student/getOpenAiFeedback', 'classes/getCommentCount', 'mailbox/getMessageCount', 'classes/attendance', 'content/contentDetail', 'content/questionSkill'].includes(req.url) || (this.auth.getRoleId() == '2' &&
            ['teacher/list', 'student/list', 'student/StudentFromClassList', 'contentcreator/list'].includes(req.url))
            || ['student/classList', 'common/fileUpload', 'student/curriculumList', 'student/answerDetails', 'teacher/getOverallFeedback'].includes(req.url) && loader == 'true') {
            // this.commondata.showLoader(false);
        }
        else if (req.url == 'classes/updateTopicOrder') {
            this.commondata.showLoader(false);
        }
        else {
            this.commondata.showLoader(true);
        }
        let allow = true;
        if (req.url == '') {
            allow = true;
        }
        else {
            this.configurationService.envRecieved.subscribe((res) => {
                allow = res;
            });
        }
        if (allow) {
            const needsHost = !(req.url.startsWith('http://') || req.url.startsWith('https://'));
            const requestUrl = needsHost ? this.configurationService.apiHost + req.url : req.url;
            const authToken = this.auth.getAccessToken() ? this.auth.getAccessToken() : '';
            let authReq;
            if (req.method !== 'GET') {
                if (!['report/studentReportClassPrint', 'teacher/teacherassignStudentPrint', 'classes/getCommentCount',
                    'mailbox/listMessages', 'mailbox/getMessageCount', 'student/curriculumList', 'student/classList'].includes(req.url)) {
                    let val;
                    if (typeof req.body === 'string') {
                        val = JSON.parse(req.body);
                    }
                    else {
                        val = req.body || {};
                    }
                    val.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    authReq = req.clone({
                        url: requestUrl,
                        setHeaders: { 'Content-Type': 'application/json', 'accesstoken': authToken },
                        body: JSON.stringify(val)
                    });
                }
                else {
                    authReq = req.clone({
                        url: requestUrl,
                        setHeaders: { 'Content-Type': 'application/json', 'accesstoken': authToken },
                    });
                }
            }
            else {
                authReq = req.clone({
                    url: requestUrl,
                    setHeaders: authToken ? { 'accesstoken': authToken } : {}
                });
            }
            return next.handle(authReq)
                .pipe(tap(event => {
                const eve = event;
                if (event instanceof HttpResponse) {
                    if (event.body && event.body.IsSuccess) {
                        this.commondata.showLoader(false);
                    }
                    else {
                        this.commondata.showLoader(false);
                    }
                }
                if (eve.status == 401) {
                    this.auth.logout();
                }
            }, error => {
                if (error.status == 401) {
                    this.auth.logout();
                }
                if (error instanceof HttpErrorResponse) {
                    if (error.error instanceof ErrorEvent) {
                        console.error('Error Event');
                    }
                    else {
                    }
                }
                this.commondata.showLoader(false);
            }));
        }
    }
    static { this.ɵfac = function ServerHttpInterceptor_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ServerHttpInterceptor)(i0.ɵɵinject(i1.CommonDataService), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.EnvironmentService), i0.ɵɵinject(i4.ToastrService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ServerHttpInterceptor, factory: ServerHttpInterceptor.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ServerHttpInterceptor, [{
        type: Injectable
    }], () => [{ type: i1.CommonDataService }, { type: i2.AuthService }, { type: i3.EnvironmentService }, { type: i4.ToastrService }], null); })();
//# sourceMappingURL=http.interceptor.js.map