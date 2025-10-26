import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, private configurationService: ConfigurationService, public authService: AuthService) { }

  teacherList(data) {
    const json = JSON.stringify(data);
    const url = 'teachers/list';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  gradeList(data) {
    const json = JSON.stringify(data);
    const url = 'grade/list';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  subjectList(data) {
    const json = JSON.stringify(data);
    const url = 'subject/list';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  individualList(data) {
    const json = JSON.stringify(data);
    const url = 'teachers/individualList';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  teacherAdd(data) {
    const json = JSON.stringify(data);
    const url = 'teachers/add';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  teacherEdit(data) {
    const json = JSON.stringify(data);
    const url = 'teachers/edit';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  PermissionTeacher(data) {
    const json = JSON.stringify(data);
    const url = 'teachers/teacherPermissionList';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  saveTeacherResourceAnnotation(data) {
    const json = JSON.stringify(data);
    const url = 'teacher/saveAnnotation';
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

