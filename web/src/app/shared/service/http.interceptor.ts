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
            const requestUrl = req.method != 'GET' ? this.configurationService.apiHost + req.url : req.url;
            const authToken = this.auth.getAccessToken() ? this.auth.getAccessToken() : '';
            // const authToken = this.auth.getAccessToken() ? '' : '';
            let authReq: any;
            if (req.method != 'GET') {

                // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone ,'zone')
                // console.log(req.body ,'req');
                // req.body.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                // let val = req.body;

                // req = req.clone({
                //     body: req.body.append('s', '2323')
                // });
                if (!['report/studentReportClassPrint', 'teacher/teacherassignStudentPrint', 'classes/getCommentCount',
                    'mailbox/listMessages', 'mailbox/getMessageCount', 'student/curriculumList', 'student/classList'].includes(req.url)) {
                    const val = JSON.parse(req.body);
                    val.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    authReq = req.clone(
                        {
                            url: requestUrl,
                            setHeaders: {'Content-Type': 'application/json', 'accesstoken': authToken},
                            body: JSON.stringify(val)
                        });
                } else {
                    authReq = req.clone(
                        {
                            url: requestUrl,
                            setHeaders: {'Content-Type': 'application/json', 'accesstoken': authToken},
                        });
                }
            } else {
                authReq = req.clone(
                    {
                        url: requestUrl,
                        // setHeaders: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accesstoken': authToken}
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
                            if (eve.status == 401) {
                                this.auth.logout();
                            }
                        },
                        error => {
                            if (error.status == 401) {
                                this.auth.logout();
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
