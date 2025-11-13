import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse<T> {
  IsSuccess: boolean;
  ResponseObject: T;
  ErrorObject: string;
}

@Injectable({ providedIn: 'root' })
export class CrmRegistrationsService {
  private readonly basePath = 'admin/self-registration';

  constructor(private http: HttpClient) {}

  list(filters: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/list`, filters)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to load registrations');
        }
        return res.ResponseObject;
      }));
  }

  detail(registrationId: number): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/detail`, { registration_id: registrationId })
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to load registration detail');
        }
        return res.ResponseObject;
      }));
  }

  updateStatus(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/status`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to update registration');
        }
        return res.ResponseObject;
      }));
  }

  updateSummary(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/summary`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to update summary');
        }
        return res.ResponseObject;
      }));
  }

  updateStudent(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/student`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to update student details');
        }
        return res.ResponseObject;
      }));
  }

  updateGuardians(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/guardians`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to update guardian details');
        }
        return res.ResponseObject;
      }));
  }

  sendMessage(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/message`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to send message');
        }
        return res.ResponseObject;
      }));
  }

  addNote(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/note`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to add note');
        }
        return res.ResponseObject;
      }));
  }

  promote(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/promote`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to convert registration');
        }
        return res.ResponseObject;
      }));
  }

  reviewDocument(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/document/review`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to update document review');
        }
        return res.ResponseObject;
      }));
  }

  saveCourseDecisions(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/course-decisions`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to save course decisions');
        }
        return res.ResponseObject;
      }));
  }

  listAssignees(): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/assignees`, {})
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to load assignees');
        }
        return res.ResponseObject;
      }));
  }

  assignClass(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/assign-class`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to assign class');
        }
        return res.ResponseObject;
      }));
  }

  approve(payload: any): Observable<any> {
    return this.http
      .post<ApiResponse<any>>(`${this.basePath}/approve`, payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to approve registration');
        }
        return res.ResponseObject;
      }));
  }
}
