import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map, filter, tap, finalize } from 'rxjs/operators';
import {CommonDataService} from './common-data.service';
import {AuthService} from './auth.service';
import {ConfigurationService} from './configuration.service';
import {ToastrService} from 'ngx-toastr';
import {EnvironmentService} from '../../environment.service';


@Injectable()


export class ServerHttpInterceptor implements HttpInterceptor{
    allow: boolean;
  constructor(public commondata: CommonDataService, public auth: AuthService, public configurationService: ConfigurationService,
              public toastr: ToastrService, public environService: EnvironmentService){

  }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // this.commondata.showLoader(true);
        if (req.url == '') {
            this.allow = true;
        } else {
            this.environService.envRecieved.subscribe((res) => {
                this.allow = res;
            });
        }

        if (this.allow) {
            const requestUrl = this.configurationService.getHost() + req.url;

            const authToken = this.auth.getAccessToken() ? this.auth.getAccessToken() : '';
            const authReq = req.clone(
                {
                    url: requestUrl,
                    setHeaders: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Accesstoken': authToken
                    }
                });
            return next.handle(authReq)
                .pipe(
                    tap(
                        event => {
                            if (event instanceof HttpResponse) {
                                if (event.body && event.body.IsSuccess) {
                                    this.commondata.showLoader(false);
                                } else {
                                    this.commondata.showLoader(false);
                                }
                            }
                        },
                        error => {
                            this.commondata.showLoader(false);
                        }
                    )
                );
        }
    }

}
