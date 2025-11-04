import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, throwError as observableThrowError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CreatorService {
    constructor(http) {
        this.http = http;
        this.contentView = new BehaviorSubject('');
        this.list = this.contentView.asObservable();
    }
    changeViewList(data) {
        this.contentView.next(data);
    }
    contentList(data) {
        const json = JSON.stringify(data);
        const url = 'content/list';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    contentCreatorList(data) {
        const json = JSON.stringify(data);
        const url = 'content/contentCreatorList';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    repositoryDetail(data) {
        const json = JSON.stringify(data);
        const url = 'content/contentDetail';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    testDetail(data) {
        const json = JSON.stringify(data);
        const url = 'content/getTestContentInfo';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    getStudDetail(data) {
        const json = JSON.stringify(data);
        const url = 'user/checkDetails';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    graphAnswer(data) {
        // const getCircularReplacer = () => {
        //   const seen = new WeakSet();
        //   return (key, value) => {
        //     if (typeof value === "object" && value !== null) {
        //       if (seen.has(value)) {
        //         return;
        //       }
        //       seen.add(value);
        //     }
        //     return value;
        //   };
        // };
        // const json = JSON.stringify(data , getCircularReplacer());
        const json = JSON.stringify(data);
        const url = 'student/graphAnswer';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    viewScratchQuestions(data) {
        const json = JSON.stringify(data);
        const url = 'student/viewScratchQuestions';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    fileUpload(data) {
        const json = JSON.stringify(data);
        const url = 'common/fileUpload';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    saveAnnotation(data) {
        const json = JSON.stringify(data);
        const url = 'student/saveAnnotation';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    classList(data) {
        const json = JSON.stringify(data);
        const url = 'content/specifiedClassList';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    addAssignResourse(data) {
        const json = JSON.stringify(data);
        const url = 'content/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    addContent(data) {
        const json = JSON.stringify(data);
        const url = '/content/addTest';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    editContent(data) {
        const json = JSON.stringify(data);
        const url = '/content/editTest';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    editAssignResourse(data) {
        const json = JSON.stringify(data);
        const url = 'content/edit';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    addDraftResourse(data) {
        const json = JSON.stringify(data);
        const url = 'content/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    editDraftResourse(data) {
        const json = JSON.stringify(data);
        const url = 'content/edit';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    contentDelete(data) {
        const json = JSON.stringify(data);
        const url = 'content/deleteQuestion';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    detaillist(data) {
        const json = JSON.stringify(data);
        const url = 'content/detail';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    releaseScoreCheck(data) {
        const json = JSON.stringify(data);
        const url = 'content/scoreReleaseCheck';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    sortmasterlist(data) {
        const json = JSON.stringify(data);
        const url = 'content/sortMaster';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    addQuestions(data) {
        // const json = JSON.stringify(data , getCircularReplacer());
        const json = JSON.stringify(data);
        // const json = data;
        // json.board =
        const url = 'content/addQuestion';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    editQuestion(data) {
        const json = JSON.stringify(data);
        const url = 'content/editQuestion';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    iconList(data) {
        const json = JSON.stringify(data);
        const url = 'content/question_types';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    deleteQuestion(data) {
        const json = JSON.stringify(data);
        const url = 'content/questionDelete';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    assignAnnotation(data) {
        const json = JSON.stringify(data);
        const url = 'content/add';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    deleteContentRepository(data) {
        const json = JSON.stringify(data);
        const url = 'content/contentRepositoryDelete';
        return this.http.post(url, json).pipe(map(this.extractData), catchError(this.handleError));
    }
    deleteAssignedContent(data) {
        const json = JSON.stringify(data);
        const url = 'content/deleteAssignedContent';
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
    static { this.ɵfac = function CreatorService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreatorService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CreatorService, factory: CreatorService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreatorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=creator.service.js.map