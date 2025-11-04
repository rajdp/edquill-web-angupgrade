import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { urls } from '../utils/urls';

interface ApiResponse<T> {
  IsSuccess: boolean;
  ResponseObject: T;
  ErrorObject: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherAvailabilityService {
  constructor(private http: HttpClient) {}

  list(params?: Record<string, string | number | boolean>): Observable<any[]> {
    const httpParams = this.toHttpParams(params);
    return this.http.get<ApiResponse<any[]>>(urls.teacherAvailability, { params: httpParams }).pipe(
      map(response => this.unwrapResponse(response)),
      catchError(this.handleError)
    );
  }

  create(payload: any): Observable<any> {
    return this.http.post<ApiResponse<any>>(urls.teacherAvailability, payload).pipe(
      map(response => this.unwrapResponse(response)),
      catchError(this.handleError)
    );
  }

  update(id: number, payload: any): Observable<any> {
    return this.http.put<ApiResponse<any>>(`${urls.teacherAvailability}/${id}`, payload).pipe(
      map(response => this.unwrapResponse(response)),
      catchError(this.handleError)
    );
  }

  remove(id: number): Observable<any> {
    return this.http.delete<ApiResponse<any>>(`${urls.teacherAvailability}/${id}`).pipe(
      map(response => this.unwrapResponse(response)),
      catchError(this.handleError)
    );
  }

  adminList(params?: Record<string, string | number | boolean>): Observable<any[]> {
    const httpParams = this.toHttpParams(params);
    return this.http.get<ApiResponse<any[]>>(urls.teacherAvailabilityAdmin, { params: httpParams }).pipe(
      map(response => this.unwrapResponse(response)),
      catchError(this.handleError)
    );
  }

  private unwrapResponse<T>(response: ApiResponse<T>): T {
    if (response && response.IsSuccess) {
      return response.ResponseObject;
    }
    throw response?.ErrorObject || 'Unable to process request.';
  }

  private handleError(error: any) {
    return throwError(() => error);
  }

  private toHttpParams(params?: Record<string, string | number | boolean>): HttpParams {
    let httpParams = new HttpParams();
    if (!params) {
      return httpParams;
    }

    Object.keys(params).forEach(key => {
      const value = params[key];
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });

    return httpParams;
  }
}
