import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(private http: HttpClient) {}

  listGuardians(payload: any) {
    return this.post('crm/guardians/list', payload);
  }

  saveGuardian(payload: any) {
    return this.post('crm/guardians/save', payload);
  }

  assignGuardian(payload: any) {
    return this.post('crm/guardians/assign', payload);
  }

  removeGuardian(payload: any) {
    return this.post('crm/guardians/remove', payload);
  }

  listFeePlans(payload: any) {
    return this.post('crm/fees/plans', payload);
  }

  saveFeePlan(payload: any) {
    return this.post('crm/fees/plan/save', payload);
  }

  assignFeePlan(payload: any) {
    return this.post('crm/fees/assign', payload);
  }

  recordPayment(payload: any) {
    return this.post('crm/fees/payment', payload);
  }

  studentOverview(payload: any) {
    return this.post('crm/fees/student-overview', payload);
  }

  generateInvoice(payload: any) {
    return this.post('crm/fees/invoice', payload);
  }

  listTemplates(payload: any) {
    return this.post('crm/notifications/templates', payload);
  }

  saveTemplate(payload: any) {
    return this.post('crm/notifications/template/save', payload);
  }

  queueNotification(payload: any) {
    return this.post('crm/notifications/queue', payload);
  }

  listNotifications(payload: any) {
    return this.post('crm/notifications/list', payload);
  }

  setOptout(payload: any) {
    return this.post('crm/notifications/optout', payload);
  }

  listExams(payload: any) {
    return this.post('crm/report/exams', payload);
  }

  saveExam(payload: any) {
    return this.post('crm/report/exam/save', payload);
  }

  saveScores(payload: any) {
    return this.post('crm/report/scores/save', payload);
  }

  getScores(payload: any) {
    return this.post('crm/report/scores', payload);
  }

  generateReport(payload: any) {
    return this.post('crm/report/generate', payload);
  }

  shareReport(payload: any) {
    return this.post('crm/report/share', payload);
  }

  viewReport(token: string) {
    return this.http.get(`crm/report/view/${token}`).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private post(url: string, payload: any) {
    const json = JSON.stringify(payload);
    return this.http.post(url, json).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: any) {
    return res || {};
  }

  private handleError(error: any) {
    let errMsg: string;
    if (error && error.status) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return throwError(() => errMsg);
  }
}
