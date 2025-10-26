import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {ConfigurationService} from "./configuration.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError as observableThrowError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class CorporatesService {

  constructor(public authService: AuthService, private configurationService: ConfigurationService, private http: HttpClient) { }

  getcorporatesList(data) {
    const json = JSON.stringify(data);
    const url = 'corporate/list';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }

 corporateAdd(data) {
    const json = JSON.stringify(data);
    const url = 'corporate/add';
    return this.http.post(url , json).pipe(
        map(this.extractData ),
        catchError(this.handleError));
  }
  corporateEdit(data) {
    const json = JSON.stringify(data);
    const url = 'corporate/edit';
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
