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
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard(params?: { from?: string; to?: string }): Observable<any> {
    const payload = params || {};
    return this.http
      .post<ApiResponse<any>>('api/dashboard', payload)
      .pipe(map(res => {
        if (!res.IsSuccess) {
          throw new Error(res.ErrorObject || 'Unable to load dashboard');
        }
        return res.ResponseObject;
      }));
  }
}

