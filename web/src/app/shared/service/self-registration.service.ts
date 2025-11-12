import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../../environment.service';
import { map, Observable } from 'rxjs';

interface ApiResponse<T> {
  IsSuccess: boolean;
  ResponseObject: T;
  ErrorObject: string;
}

export interface ExistingStudentProfile {
  student_id: number;
  corp_id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  mobile?: string;
  date_of_birth?: string | null;
  address?: {
    line1?: string | null;
    line2?: string | null;
    city?: string | null;
    state?: string | null;
    postal_code?: string | null;
    country?: string | null;
  };
  guardians?: Array<{
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    relation?: string | null;
    type?: 'primary' | 'secondary' | string | null;
  }>;
  active_courses?: Array<{
    course_id: number;
    course_name: string;
    schedule_title?: string | null;
  }>;
  last_enrolled_at?: string | null;
}

export interface ExistingStudentLookupResponse {
  match_found: boolean;
  student?: ExistingStudentProfile | null;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SelfRegistrationService {
  constructor(private http: HttpClient, private env: EnvironmentService) {}

  deriveSchoolKeyFromHost(hostname: string): string | null {
    return this.env.resolveTenantKey(hostname);
  }

  loadConfiguration(identifier: string): Observable<any> {
    const url = `${this.env.apiHost}self-registration/config/${encodeURIComponent(identifier)}`;
    return this.http.get<ApiResponse<any>>(url).pipe(
      map(response => {
        if (!response.IsSuccess) {
          throw new Error(response.ErrorObject || 'Unable to load configuration');
        }
        return response.ResponseObject;
      })
    );
  }

  submitRegistration(payload: any): Observable<any> {
    const url = `${this.env.apiHost}self-registration/submit`;
    return this.http.post<ApiResponse<any>>(url, payload).pipe(
      map(response => {
        if (!response.IsSuccess) {
          throw new Error(response.ErrorObject || 'Submission failed');
        }
        return response.ResponseObject;
      })
    );
  }

  lookupExistingStudent(schoolKey: string, email: string): Observable<ExistingStudentLookupResponse> {
    const url = `${this.env.apiHost}self-registration/lookup`;
    const payload = { school_key: schoolKey, email };
    return this.http.post<ApiResponse<ExistingStudentLookupResponse>>(url, payload).pipe(
      map(response => {
        if (!response.IsSuccess) {
          throw new Error(response.ErrorObject || 'Unable to look up student record');
        }
        return response.ResponseObject;
      })
    );
  }
}
