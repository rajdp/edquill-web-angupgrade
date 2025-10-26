import { Injectable } from '@angular/core';
import {BehaviorSubject, throwError as observableThrowError } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ConfigurationService} from './configuration.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdmincreatorService {
  public contentView = new BehaviorSubject<any>('');
  list = this.contentView.asObservable();
  constructor(private http: HttpClient, private configurationService: ConfigurationService, public authService: AuthService) { }
  changeViewList(data){
    this.contentView.next(data);
  }
  contentList(data) {
    const json = JSON.stringify(data);
    const url = 'content/list';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }

  contentCreatorList(data) {
    const json = JSON.stringify(data);
    const url = 'content/contentCreatorList';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  repositoryDetail(data) {
    const json = JSON.stringify(data);
    const url = 'content/contentDetail';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  getStudDetail(data) {
    const json = JSON.stringify(data);
    const url = 'user/checkDetails';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  graphAnswer(data) {
    const json = JSON.stringify(data);
    const url = 'student/graphAnswer';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  saveAnnotation(data) {
    const json = JSON.stringify(data);
    const url = 'student/saveAnnotation';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  classList(data){
    const json = JSON.stringify(data);
    const url = 'content/specifiedClassList';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }

  addAssignResourse(data) {
    const json = JSON.stringify(data);
    const url = 'content/add';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  editAssignResourse(data) {
    const json = JSON.stringify(data);
    const url = 'content/edit';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  addDraftResourse(data) {
    const json = JSON.stringify(data);
    const url = 'content/add';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  editDraftResourse(data) {
    const json = JSON.stringify(data);
    const url = 'content/edit';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  detaillist(data){
    const json = JSON.stringify(data);
    const url = 'content/detail';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  sortmasterlist(data){
    const json = JSON.stringify(data);
    const url = 'content/sortMaster';
    return this.http.post(url , json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  addQuestions(data){
    const getCircularReplacer = () => {

      return (key, value) => {
        const seen = new WeakSet();

        if (key != 'answer'){
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        }else{
          seen.add(value);
        }

      };
    };
    const json = JSON.stringify(data);
    const url = 'content/addQuestion';
    return this.http.post(url, json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  editQuestion(data){
    const json = JSON.stringify(data);
    const url = 'content/editQuestion';
    return this.http.post(url, json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  iconList(data) {
    const json = JSON.stringify(data);
    const url = 'content/question_types';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  assignAnnotation(data) {
    const json = JSON.stringify(data);
    const url = 'content/add';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  deleteContentRepository(data) {
    const json = JSON.stringify(data);
    const url = 'content/contentRepositoryDelete';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  deleteAssignedContent(data) {
    const json = JSON.stringify(data);
    const url = 'content/deleteAssignedContent';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
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
}
