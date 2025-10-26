import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {throwError as observableThrowError} from 'rxjs/internal/observable/throwError';
import {EnvironmentService} from '../../environment.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CommonDataService} from './common-data.service';
import {CreatorService} from './creator.service';
import {AssessmentComponent} from '../../components/studentlogin/assessment/assessment.component';
import {AssingmentsComponent} from '../../components/studentlogin/assingments/assingments.component';
import {Dashboard3Component} from '../../components/studentlogin/dashboard3/dashboard3.component';
import {ClassDetailComponent} from '../../components/studentlogin/class-detail/class-detail.component';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {

    public commondata = inject(CommonDataService);
    private assessmentRef: AssessmentComponent | null = null;
    private assignmentRef: AssingmentsComponent | null = null;
    private dashboardRef: Dashboard3Component | null = null;
    private classDetailRef: ClassDetailComponent | null = null;
    private _sidebarOpened = new BehaviorSubject<boolean>(true); // default = open
    sidebarOpened$ = this._sidebarOpened.asObservable();

    setAssessmentRef(ref: AssessmentComponent) {
        this.assessmentRef = ref;
    }

    setAssignmentRef(ref: AssingmentsComponent) {
        this.assignmentRef = ref;
    }

    setDashboardRef(ref: Dashboard3Component) {
        this.dashboardRef = ref;
    }

    setClassDetailsRef(ref: ClassDetailComponent) {
        this.classDetailRef = ref;
    }

    constructor(private router: Router, public toastr: ToastrService, private http: HttpClient, public env: EnvironmentService,
                public creatorService: CreatorService) {
    }

    setSideBarOpened(opened) {
        this._sidebarOpened.next(opened);
    }

    get sideBarOpened(): boolean {
        return this._sidebarOpened.value;
    }

    loggedIn() {
        return (!(this.getAccessToken() === undefined || this.getAccessToken() === '' || this.getAccessToken() == null));
    }

    setToken(userid, firstname, lastname, userrole, accesstoken) {
        localStorage.setItem(this.env.prefixName + 'userid', userid);
        localStorage.setItem(this.env.prefixName + 'firstname', firstname);
        localStorage.setItem(this.env.prefixName + 'lastname', lastname);
        localStorage.setItem(this.env.prefixName + 'roleid', userrole);
        localStorage.setItem(this.env.prefixName + 'Accesstoken', accesstoken);
    }

    getSchoolName() {
        return localStorage.getItem(this.env.prefixName + 'school_name');
    }

    getUserId() {
        return localStorage.getItem(this.env.prefixName + 'userid');
    }

    setInputSearchValue(key, value) {
        const getSearchValue = JSON.parse(this.getSessionData('commonInputSearchValue'));
        if (getSearchValue) {
            getSearchValue[key + 'SearchValue'].searchValue = value;
            this.setSessionData('commonInputSearchValue', JSON.stringify(getSearchValue));
        }
    }

    getInputSearchValue(key) {
        const getSearchValue = JSON.parse(this.getSessionData('commonInputSearchValue'));
        return getSearchValue ? getSearchValue[key + 'SearchValue'].searchValue ?? '' : '';
    }

    getAccessToken() {
        return localStorage.getItem(this.env.prefixName + 'Accesstoken');
    }

    getRoleId() {
        return localStorage.getItem(this.env.prefixName + 'roleid');
    }

    getSessionData(variable) {
        variable = this.env.prefixName + variable;
        return localStorage.getItem(variable);
    }

    setSessionData(variable, value) {
        variable = this.env.prefixName + variable;
        return localStorage.setItem(variable, value);
    }

    removeSessionData(variable) {
        localStorage.removeItem(this.env.prefixName + variable);
    }

    stripHtml(html: string): string {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    }

    get allowTransfer() {
        return this.checkTutorLogin ? this.checkPermission('4', '8') : !this.checkTutorLogin;
    }

    get manageSubject() {
        return this.checkTutorLogin ? this.checkPermission('3', '4') : !this.checkTutorLogin;
    }

    get manageClass() {
        return this.checkTutorLogin ? this.checkPermission('4', '7') : !this.checkTutorLogin;
    }

    get manageOwnContent() {
        return this.checkTutorLogin ? this.checkPermission('1', '5') : !this.checkTutorLogin;
    }

    get manageInstitutionContent() {
        return this.checkTutorLogin ? this.checkPermission('1', '6') : !this.checkTutorLogin;
    }

    get showStudentEmailId() {
        return this.checkTutorLogin ? this.checkPermission('2', '3') : !this.checkTutorLogin;
    }

    get manageStudent() {
        return this.checkTutorLogin ? this.checkPermission('2', '2') : !this.checkTutorLogin;
    }

    get emailValidatorPattern() {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    }

    checkPermission(groupId, id) {
        const schoolDetails = JSON.parse(this.getSessionData('rista_data1'));
        const hasPermission = schoolDetails.permissions.some(group =>
            group.group_id == groupId && group.permission.some(p => p.id == id && p.status == 1)
        );
        return this.checkTutorLogin ? hasPermission : this.getRoleId() == '5' ? false : !this.checkTutorLogin;
    }

    get checkTutorLogin() {
        return this.getRoleId() == '4' && this.getSessionData('teacher_type') == '0';
    }

    checkAuthentication() {
        if (this.loggedIn()) {
            this.router.navigate(['/dashboard/default']);
        }
    }

    getCurrentDateAndTime(contentDetails, calledFrom = '', pageCalledFrom = ''): Observable<boolean> {
        const payload = {
            platform: 'web',
            role_id: this.getRoleId(),
            user_id: this.getUserId(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        return new Observable<boolean>(observer => {
            this.postService(payload, 'student/getCurrentDateTime').subscribe(
                (successData: any) => {
                    if (successData.IsSuccess) {
                        const contentDuration = parseInt(contentDetails.content_duration);
                        const isAccessAllowed = this.checkContentAccess(contentDetails.content_started_at, contentDuration, successData.ResponseObject);
                        console.log(isAccessAllowed, 'isAccessAllowed');
                        if (isAccessAllowed.accessAllowed || contentDuration === 0) {
                            contentDetails.available_content_duration = contentDuration === 0 ? 0 : isAccessAllowed.remainingSeconds;
                            if (contentDetails.is_test == '1' && calledFrom == '') {
                                this.testDetails(contentDetails, pageCalledFrom);
                            } else {
                                this.setSessionData('classDetails', JSON.stringify(contentDetails));
                                this.router.navigate(['/studentlogin/answering']);
                            }
                            observer.next(true);
                        } else {
                            observer.next(false);
                        }
                    } else {
                        this.toastr.error(successData.ResponseObject);
                        observer.next(false);
                    }
                    observer.complete();
                },
                error => {
                    console.error(error, 'error_getCurrentDateAndTime');
                    observer.next(false);
                    observer.complete();
                }
            );
        });
    }

    testDetails(event, pageCalledFrom = '') {
        const data = {
            platform: 'web',
            role_id: this.getRoleId(),
            user_id: this.getUserId(),
            content_id: event.content_id,
            student_content_id: event.student_content_id,
            school_id: this.getSessionData('school_id')
        };
        this.creatorService.testDetail(data).subscribe((successData: any) => {
                if (successData.IsSuccess) {
                    this.testDetailsRoutingPage(successData.ResponseObject, pageCalledFrom);
                }
            },
            (error) => {
                console.error(error, 'error_lisDetails');
            });
    }

    testDetailsRoutingPage(arrayValue, pageCalledFrom) {
        arrayValue.forEach((items) => {
            items.contents.forEach(value => {
                value.is_test = '1'; value.content_name = items.name;
                value.content_format = items.content_format;
                value.class_content_id = items.class_content_id;
                value.test_content_id = items.content_id;
                value.class_id = items.class_id;
                value.test_student_content_status = items.student_content_status;
            });
        });

        this.setSessionData('test_details', JSON.stringify(arrayValue));

        arrayValue[0]?.contents.every((value, index) => {
            if (value.content_started_at == null && (value.student_content_status == '1' || value.student_content_status == '2')) {
                value.available_content_duration = parseInt(value.content_duration) * 60;
                this.updateContentStatus(value, 'test');
                return false;
            } else if (value.content_started_at != '' && value.content_started_at &&
                value.content_duration != '0' && (value.student_content_status == '1' || value.student_content_status == '2')) {
                this.getCurrentDateAndTime(value, 'test', pageCalledFrom).subscribe((isAllowed: boolean) => {
                    if (!isAllowed) {
                        console.log('Access denied');
                        value.lastQuestions = index == arrayValue[0]?.contents.length - 1;
                        value.nextModuleData = arrayValue[0]?.contents[index + 1];
                        if (pageCalledFrom == 'assessment') {
                            this.assessmentRef?.submitTestFromAuthService(value);
                        } else if (pageCalledFrom == 'assignment') {
                            this.assignmentRef?.submitTestFromAuthService(value);
                        } else if (pageCalledFrom == 'dashboard') {
                            this.dashboardRef?.submitTestFromAuthService(value);
                        } else if (pageCalledFrom == 'class-details') {
                            this.classDetailRef?.submitTestFromAuthService(value);
                        }
                    }
                });
                return false;
            } else if (value.content_format == '3' && value.content_started_at != '' && (value.test_student_content_status == '1' || value.test_student_content_status == '2')
                && value.content_started_at && value?.is_test == '1' && value.content_duration != '0'
                && (value.student_content_status != '1' && value.student_content_status != '2')) {
                return true;
            } else {
                value.available_content_duration = value.content_duration != '0' ? parseInt(value.content_duration) * 60 : 0;
                this.setSessionData('classDetails', JSON.stringify(value));
                this.router.navigate(['/studentlogin/answering']);
                return false;
            }
            return true;
        });
    }

    updateContentStatus(data, calledFrom) {
        const payload = {
            platform: 'web',
            role_id: this.getRoleId(),
            user_id: this.getUserId(),
            student_content_id: data.student_content_id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            module_id: data.content_id
        };
        this.postService(payload, 'student/updateContentStartTime').subscribe((successData: any) => {
            console.log(successData, 'successData');
            if (successData.IsSuccess) {
                if (calledFrom == 'test') {
                    this.setSessionData('classDetails', JSON.stringify(data));
                    this.router.navigate(['/studentlogin/answering']);
                } else if (calledFrom == 'list') {
                    data.available_content_duration = parseInt(data.content_duration) * 60;
                    this.setSessionData('classDetails', JSON.stringify(data));
                    this.router.navigate(['/studentlogin/answering']);
                }
            }
        }, error => console.error(error, 'error_updateStatus'));
    }

    checkContentAccess(contentStartedAt: string, contentDuration: number, currentTime: string): { accessAllowed: boolean, remainingSeconds?: number } {
        const start = new Date(contentStartedAt.replace(' ', 'T'));
        const durationInMs = contentDuration * 60 * 1000; // minutes to ms
        const expiryTime = new Date(start.getTime() + durationInMs);
        const now = new Date(currentTime.replace(' ', 'T'));

        if (now <= expiryTime) {
            const diffMs = expiryTime.getTime() - now.getTime();
            const remainingSeconds = Math.ceil(diffMs / 1000); // total seconds

            return {
                accessAllowed: true,
                remainingSeconds
            };
        } else {
            return {accessAllowed: false};
        }
    }

    questionList(data): Promise<void> {
        return new Promise((resolve, reject) => {
            const payload = {
                platform: 'web',
                role_id: this.getRoleId(),
                user_id: this.getUserId(),
                school_id: this.getSessionData('school_id'),
                content_id: data?.is_test == '1' ? data?.test_content_id : data.content_id,
                content_format: data.content_format,
                class_id: data.class_id,
                student_content_id: data.student_content_id,
                class_content_id: data.class_content_id,
                student_id: this.getUserId(),
            };

            if (data?.is_test == '1') {
                data['is_test'] = data?.is_test;
                data['module_id'] = data?.content_id;
            }

            this.postService(payload, 'content/contentDetail').subscribe({
                next: (successData: any) => {
                    if (successData.IsSuccess) {
                        const questionData = successData.ResponseObject;
                        this.saveAnswer(questionData, data, resolve, reject);
                    } else {
                        reject('Question list API failed');
                    }
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }

    saveAnswer(questionData, data, resolve, reject) {
        for (let i = 0; i < questionData.questions.length; i++) {
            this.saveAnswerForFewType(questionData.questions[i]);
            const checkAutoGrade = questionData.all_autograde == '1' ? questionData?.auto_review : '0';
            if (checkAutoGrade != '0') {
                const particularObjectValue = questionData.questions[i].question_type_id != '24' ? questionData.questions[i] : questionData.questions[i].subQuestions[0];
                if (particularObjectValue.is_correct == '' || particularObjectValue.is_correct == 'partially-completed' || particularObjectValue.is_correct == 'manual') {
                    particularObjectValue.no_of_attempt = parseInt(particularObjectValue.no_of_attempt) + 1;
                    particularObjectValue.is_correct = questionData.questions[i].question_type_id != '55' ? this.checkCorrectAnswerOrNot(particularObjectValue) : 'false';
                }
            }
        }

        questionData.questions.forEach((items) => {
            if (items.question_type_id != '55') {
                const particularObjectValue = items.question_type_id != '24' ? items : items.subQuestions[0];
                particularObjectValue.earned_points = particularObjectValue.is_correct == 'true' ? parseInt(particularObjectValue.points) : 0;
            }
        });

        const content_time_taken = questionData.content_duration != '0' ? parseInt(questionData.content_duration) * 60
            : questionData.content_time_taken;
        const payload = {
            platform: 'web',
            role_id: this.getRoleId(),
            user_id: this.getUserId(),
            student_id: this.getUserId(),
            content_id: questionData.content_id,
            content_format: questionData.content_format,
            student_content_id: data.student_content_id,
            class_id: data.class_id,
            content_time_taken,
            overall_student_feedback: questionData.overall_student_feedback,
            questions: questionData.questions,
            all_autograde: this.isSingleQnsWithFeedbackType(questionData.questions) && questionData.auto_review != '0' ? '1' : questionData.all_autograde,
            laq_id: questionData.questions[0]?.question_type_id != '24' ?
                questionData.questions[0]?.question_id : questionData.questions[0]?.subQuestions[0]?.question_id,
            status: '4',
        };
        console.log(payload , 'allow');
        this.commondata.showLoader(true);
        this.postService(payload, 'content/addStudentAnswer').subscribe((successData) => {
            this.toastr.success(questionData.content_format == '2' ? 'Assignment' : 'Assesment' + ' ' + 'Submitted Successfully');
            console.log(successData, 'successData');
            resolve();
        }, (error) => {
            this.commondata.showLoader(false);
            console.error(error);
            reject(error);
        });

    }

    saveAnswerForFewType(questionValue) {
        if (questionValue.question_type_id == '40' || questionValue.question_type_id == '41') {
            if (questionValue.given_answer[0].isSelected != '' && questionValue.given_answer[0].isSelected) {
                // this.saveGraph(this.totalAns[questionNumber].given_answer[0].isSelected, this.totalAns[questionNumber].editor_key, this.totalAns[questionNumber]);
            }
            questionValue.given_answer[0].isSelected = '';
        } else if (['20'].indexOf(questionValue.question_type_id) > -1) {
            if (questionValue.given_answer[0].isSelected1) {
                questionValue.given_answer[0].isSelected = questionValue.given_answer[0].isSelected1;
            }
        } else if (questionValue.question_type_id == '10') {
            for (let j = 0; j < questionValue.given_answer.length; j++) {
                if (questionValue.given_answer[j].isSelected1) {
                    questionValue.given_answer[j].isSelected = questionValue.given_answer[j].isSelected1;
                } else {
                    questionValue.given_answer[j].isSelected = '';
                }
            }
        } else if (questionValue.question_type_id == '24') {
            for (let j = 0; j < questionValue.subQuestions.length; j++) {
                if (questionValue.subQuestions[j].question_type_id == '10') {
                    for (let k = 0; k < questionValue.subQuestions[j].given_answer.length; k++) {
                        if (questionValue.subQuestions[j].given_answer[k].isSelected1) {
                            questionValue.subQuestions[j].given_answer[k].isSelected = questionValue.subQuestions[j].given_answer[k].isSelected1;
                        } else {
                            questionValue.subQuestions[j].given_answer[k].isSelected = '';
                        }
                    }
                }
            }
        }
    }

    checkCorrectAnswerOrNot(data) {

        let correctAnswer: any = false;

        if (data.question_type_id == '1') {
            correctAnswer = data.answer.every((items, index) => {
                return !(items.correctActive == '1' && data.given_answer[index].isSelected == '');
            });
        } else if (data.question_type_id == '2') {
            correctAnswer = data.answer.every((items, index) => {
                return !((items.correctActive == '1' && data.given_answer[index].isSelected == '') || (items.correctActive == '' && data.given_answer[index].isSelected != ''));
            });
        } else if (data.question_type_id == '5') {
            correctAnswer = data.given_answer.every((items, index) => {
                return items.isSelected == data.heading_option[index].correctActive.toString();
            });
        } else if (data.question_type_id == '7') {
            let pushArrayValue = [];
            data.given_answer.forEach((item) => {
                const splitedValue = item.isSelected != '' ? item.isSelected.split(',') : [];
                splitedValue.forEach((splitForEach) => {
                    pushArrayValue.push({
                        question : item.options,
                        isSelected: splitForEach
                    });
                });
            });
            const result = pushArrayValue.filter((o1) => {
                return !data.heading_option.some((o2) => {
                    return o1.question == o2.correctOption && o1.isSelected == o2.correctAnswer;
                });
            });
            correctAnswer = pushArrayValue.length == data.heading_option.length && result.length == 0;
        } else if (data.question_type_id == '9') {
            correctAnswer = data.given_answer.every((item) => {
                return !(item.isSelected == '' || item.options[item.isSelected].selected != 'true');
            });
        } else if (data.question_type_id == '10') {
            correctAnswer = data.given_answer.every((items) => {
                const enteredValue = items.options[0]?.value.trim().toLowerCase().split(' ').join('');
                return !(items.isSelected == '' || enteredValue != items.isSelected.trim().toLowerCase().split(' ').join(''));
            });
        } else if (data.question_type_id == '16') {
            correctAnswer = data.answer.every((items, index) => {
                return items.correctAnswer == data.given_answer[index].options;
            });
        } else if (data.question_type_id == '20') {
            if (data.given_answer[0]?.isSelected1) {
                const enteredValue = data.given_answer[0]?.isSelected1.trim().toLowerCase().split(' ').join('');
                correctAnswer = data.answer.some(answer => answer.correctAnswer.trim().toLowerCase().split(' ').join('') == enteredValue);
            } else {
                correctAnswer = false;
            }
        }
        return correctAnswer.toString();
    }

    isSingleQnsWithFeedbackType(array): boolean {
        return array.length === 1 && array.some(qns => qns.question_type_id === '55');
    }

    postService(data, url) {
        const json = JSON.stringify(data);
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            // const body = error.json() || '';
            const err = error || JSON.stringify(error);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return observableThrowError(error);
    }

    logout() {

        if (this.getRoleId() != '6') {
            this.router.navigate(['/auth/login']);
        } else {
            this.router.navigate(['/auth/login/corporate']);
        }
        this.toastr.error('You have logged in another Device .Please Re-login');

        sessionStorage.clear();
        localStorage.clear();
    }

}
