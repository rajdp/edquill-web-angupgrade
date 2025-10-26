import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {AuthService} from './auth.service';
import {throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor(private http: HttpClient, private configurationService: ConfigurationService, public authService: AuthService) { }
  getCareersList(data) {
    const json = JSON.stringify(data);
    const url = 'careers/list';
    return this.http.post(url, json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  addCareersList(data) {
    const json = JSON.stringify(data);
    const url = 'careers/add';
    return this.http.post(url, json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  editCareersList(data) {
    const json = JSON.stringify(data);
    const url = 'careers/edit';
    return this.http.post(url, json).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }
  jobDetailsCareersList(data) {
    const json = JSON.stringify(data);
    const url = 'careers/jobDetails';
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
}
