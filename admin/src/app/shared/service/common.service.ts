import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient, private configurationService: ConfigurationService, public authService: AuthService) {
  }
  convertBase64PdfPath(b64Data){
    const byteCharacters = atob(b64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    //const blob = new Blob([byteArray], {type: 'application/pdf'});
    return byteArray;
  }
  fileUpload(data) {
    const json = JSON.stringify(data);
    const url = 'common/fileUpload';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  getStateList(data) {
    const json = JSON.stringify(data);
    const url = 'common/state';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  getCountryList(data) {
    const json = JSON.stringify(data);
    const url = 'common/country';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  excelUpload(data) {
    const json = JSON.stringify(data);
    const url = 'common/bulkUpload';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  excelDownload(data) {
    const json = JSON.stringify(data);
    const url = 'common/downloadExcel';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  bulkInsert(data) {
    const json = JSON.stringify(data);
    const url = 'common/bulkInsert';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  emailInviteUpload(data) {
    const json = JSON.stringify(data);
    const url = 'common/emailInvite';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  settingsDetails(data) {
    const json = JSON.stringify(data);
    const url = 'common/settingList';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  editsettings(data) {
    const json = JSON.stringify(data);
    const url = 'common/settingEdit';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  tagList(data) {
    const json = JSON.stringify(data);
    const url = 'common/tagsList';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  bloggerList(data) {
    const json = JSON.stringify(data);
    const url = 'blogger/list';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  bloggerViewCount(data) {
    const json = JSON.stringify(data);
    const url = 'blogger/viewCount';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  bloggerAdd(data) {
    const json = JSON.stringify(data);
    const url = 'blogger/add';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  bloggerEdit(data) {
    const json = JSON.stringify(data);
    const url = 'blogger/edit';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  bloggerDelete(data) {
    const json = JSON.stringify(data);
    const url = 'blogger/delete';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  testimonyList(data) {
    const json = JSON.stringify(data);
    const url = 'staticsite/list';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  testimonyAdd(data) {
    const json = JSON.stringify(data);
    const url = 'staticsite/add';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  testimonyEdit(data) {
    const json = JSON.stringify(data);
    const url = 'staticsite/edit';
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
