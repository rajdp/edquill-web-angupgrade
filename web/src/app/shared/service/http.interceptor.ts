import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CommonDataService} from './common-data.service';
import {AuthService} from './auth.service';
import {ToastrService} from 'ngx-toastr';
import {EnvironmentService} from '../../environment.service';

@Injectable()

export class ServerHttpInterceptor implements HttpInterceptor {

    constructor(public commondata: CommonDataService, public auth: AuthService, public configurationService: EnvironmentService,
                public toastr: ToastrService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Skip interceptor for external URLs (CDN, APIs outside our backend)
        if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
            return next.handle(req);
        }

        const loader = this.auth.getSessionData('sse_loader') ?? 'false';
        if (['content/sortMaster', 'teacher/saveAnnotation', 'student/studentClassList', 'student/saveAnnotation', 'teacher/teacherCorrectionAnnotation'
            , 'teacher/teacherassignStudentPrint', 'report/studentReportClassPrint', 'teacher/saveAnswerSheetAnnotation', 'classes/addScheduleNotes'
            , 'mailbox/update', 'mailbox/list', 'mailbox/listMessages', 'classes/classDetail', 'content/addStudentAnswer', 'teacher/teacherCorrection'
            , 'student/getOpenAiFeedback', 'classes/getCommentCount', 'mailbox/getMessageCount', 'classes/attendance', 'content/contentDetail', 'content/questionSkill'].includes(req.url) || (this.auth.getRoleId() == '2' &&
            ['teacher/list', 'student/list', 'student/StudentFromClassList', 'contentcreator/list'].includes(req.url))
            || ['student/classList', 'common/fileUpload', 'student/curriculumList', 'student/answerDetails', 'teacher/getOverallFeedback'].includes(req.url) && loader == 'true') {
            // this.commondata.showLoader(false);
        } else if (req.url == 'classes/updateTopicOrder') {
            this.commondata.showLoader(false);
        } else {
            this.commondata.showLoader(true);
        }

        let allow = true;
        if (req.url == '') {
            allow = true;
        } else {
            this.configurationService.envRecieved.subscribe((res) => {
                allow = res;
            });
        }
        if (allow) {
            const needsHost = !(req.url.startsWith('http://') || req.url.startsWith('https://'));
            const requestUrl = needsHost ? this.configurationService.apiHost + req.url : req.url;
            const authToken = this.auth.getAccessToken() ? this.auth.getAccessToken() : '';
            let authReq: HttpRequest<any>;

            if (req.method !== 'GET') {
                if (!['report/studentReportClassPrint', 'teacher/teacherassignStudentPrint', 'classes/getCommentCount',
                    'mailbox/listMessages', 'mailbox/getMessageCount', 'student/curriculumList', 'student/classList'].includes(req.url)) {
                    let val: any;
                    if (typeof req.body === 'string') {
                        val = JSON.parse(req.body);
                    } else {
                        val = req.body || {};
                    }
                    val.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    authReq = req.clone({
                        url: requestUrl,
                        setHeaders: {'Content-Type': 'application/json', 'Accesstoken': authToken},
                        body: JSON.stringify(val)
                    });
                } else {
                    authReq = req.clone({
                        url: requestUrl,
                        setHeaders: {'Content-Type': 'application/json', 'Accesstoken': authToken},
                    });
                }
            } else {
                authReq = req.clone({
                    url: requestUrl,
                    setHeaders: authToken ? {'Accesstoken': authToken} : {}
                });
            }

            return next.handle(authReq)
                .pipe(
                    tap(
                        event => {
                            const eve: any = event;
                            if (event instanceof HttpResponse) {
                                if (event.body && event.body.IsSuccess) {
                                    this.commondata.showLoader(false);
                                } else {
                                    this.commondata.showLoader(false);
                                }
                            }
                            if (eve.status == 401 && this.auth.loggedIn()) {
                                this.auth.logout(true, 'Authentication error. Please log in again.');
                            }
                        },
                        error => {
                            if (error.status == 401) {
                                console.error('🔴 401 Error', error);
                                console.log('Request URL:', error.url);
                                console.log('Error details:', error.error);

                                if (this.auth.loggedIn()) {
                                    const errorMessage = typeof error.error === 'object' && error.error
                                        ? (error.error.ErrorObject || error.error.message || error.message)
                                        : error.message;
                                    const normalized = (errorMessage || '').toLowerCase();
                                    const tokenExpired = normalized.includes('token') && normalized.includes('expire');
                                    const logoutMessage = tokenExpired
                                        ? 'Your session has expired. Please log in again.'
                                        : 'Authentication error. Please log in again.';
                                    this.auth.logout(true, logoutMessage);
                                }
                            }
                            if (error.status == 400) {
                                console.error('🟡 400 Bad Request Error', error);
                                console.log('Request URL:', error.url);
                                console.log('Request payload:', error.error);
                                console.log('Full error:', error);
                            }
                            if (error instanceof HttpErrorResponse) {
                                if (error.error instanceof ErrorEvent) {
                                    console.error('Error Event');
                                } else {
                                }
                            }
                            this.commondata.showLoader(false);
                        }
                    )
                );
        }


    }

}
