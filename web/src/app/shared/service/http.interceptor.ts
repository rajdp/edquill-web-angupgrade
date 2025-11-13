import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, Subject} from 'rxjs';
import {tap, catchError, switchMap, take} from 'rxjs/operators';
import {CommonDataService} from './common-data.service';
import {AuthService} from './auth.service';
import {ToastrService} from 'ngx-toastr';
import {EnvironmentService} from '../../environment.service';

@Injectable()

export class ServerHttpInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: Subject<boolean> | null = null;

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
                                // Don't logout immediately - let error handler deal with it
                            }
                        },
                        error => {
                            // Error handling moved to catchError operator
                        }
                    ),
                    catchError((error: HttpErrorResponse) => {
                        if (error.status === 401 && this.auth.loggedIn()) {
                            const errorMessage = typeof error.error === 'object' && error.error
                                ? (error.error.ErrorObject || error.error.message || error.message)
                                : error.message || '';
                            const normalized = (errorMessage || '').toLowerCase();
                            const tokenExpired = normalized.includes('token') && normalized.includes('expire');

                            // Skip refresh for logout and refreshToken endpoints to avoid infinite loops
                            if (req.url.includes('user/logout') || req.url.includes('user/refreshToken')) {
                                this.commondata.showLoader(false);
                                return throwError(() => error);
                            }

                            if (tokenExpired) {
                                console.log('🔄 Token expired, attempting refresh...');
                                return this.handleTokenRefresh(req, next);
                            } else {
                                // Non-token-expired 401 error
                                console.error('🔴 401 Error (non-token-expired)', error);
                                console.log('Request URL:', error.url);
                                console.log('Error details:', error.error);
                                const logoutMessage = 'Authentication error. Please log in again.';
                                this.auth.logout(true, logoutMessage);
                                this.commondata.showLoader(false);
                                return throwError(() => error);
                            }
                        }

                        // Handle other error statuses
                        if (error.status === 400) {
                            console.error('🟡 400 Bad Request Error', error);
                            console.log('Request URL:', error.url);
                            console.log('Request payload:', error.error);
                            console.log('Full error:', error);
                        }
                        if (error instanceof HttpErrorResponse) {
                            if (error.error instanceof ErrorEvent) {
                                console.error('Error Event');
                            }
                        }
                        this.commondata.showLoader(false);
                        return throwError(() => error);
                    })
                );
        }
    }

    /**
     * Handle token refresh and retry the original request
     */
    private handleTokenRefresh(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If we're already refreshing, wait for the refresh to complete
        if (this.isRefreshing && this.refreshTokenSubject) {
            // Wait for refresh to complete, then retry
            return this.refreshTokenSubject.pipe(
                take(1),
                switchMap((refreshSuccess: boolean) => {
                    if (refreshSuccess) {
                        return this.retryRequest(request, next);
                    } else {
                        return throwError(() => new Error('Token refresh failed'));
                    }
                })
            );
        }

        // Start refresh process
        this.isRefreshing = true;
        this.refreshTokenSubject = new Subject<boolean>();

        return this.auth.refreshToken().pipe(
            switchMap((refreshSuccess: boolean) => {
                this.isRefreshing = false;
                
                if (refreshSuccess) {
                    console.log('✅ Token refreshed, retrying original request');
                    this.refreshTokenSubject!.next(true);
                    return this.retryRequest(request, next);
                } else {
                    console.error('❌ Token refresh failed, logging out');
                    this.refreshTokenSubject!.next(false);
                    this.auth.logout(true, 'Your session has expired. Please log in again.');
                    this.commondata.showLoader(false);
                    return throwError(() => new Error('Token refresh failed'));
                }
            }),
            catchError((err) => {
                this.isRefreshing = false;
                this.refreshTokenSubject!.next(false);
                console.error('❌ Token refresh error:', err);
                this.auth.logout(true, 'Your session has expired. Please log in again.');
                this.commondata.showLoader(false);
                return throwError(() => err);
            })
        );
    }

    /**
     * Retry the original request with the new token
     */
    private retryRequest(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newToken = this.auth.getAccessToken();
        const needsHost = !(request.url.startsWith('http://') || request.url.startsWith('https://'));
        const requestUrl = needsHost ? this.configurationService.apiHost + request.url : request.url;

        let retryReq: HttpRequest<any>;

        if (request.method !== 'GET') {
            if (!['report/studentReportClassPrint', 'teacher/teacherassignStudentPrint', 'classes/getCommentCount',
                'mailbox/listMessages', 'mailbox/getMessageCount', 'student/curriculumList', 'student/classList'].includes(request.url)) {
                let val: any;
                if (typeof request.body === 'string') {
                    val = JSON.parse(request.body);
                } else {
                    val = request.body || {};
                }
                val.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                retryReq = request.clone({
                    url: requestUrl,
                    setHeaders: {'Content-Type': 'application/json', 'Accesstoken': newToken},
                    body: JSON.stringify(val)
                });
            } else {
                retryReq = request.clone({
                    url: requestUrl,
                    setHeaders: {'Content-Type': 'application/json', 'Accesstoken': newToken},
                });
            }
        } else {
            retryReq = request.clone({
                url: requestUrl,
                setHeaders: newToken ? {'Accesstoken': newToken} : {}
            });
        }

        return next.handle(retryReq).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        if (event.body && event.body.IsSuccess) {
                            this.commondata.showLoader(false);
                        } else {
                            this.commondata.showLoader(false);
                        }
                    }
                },
                error => {
                    this.commondata.showLoader(false);
                }
            )
        );
    }

}
