import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../../shared/service/auth.service';
import {StudentService} from '../../../shared/service/student.service';
import {CreatorService} from '../../../shared/service/creator.service';


@Injectable()
export class PreviewResolver  {
public getData: any;
    constructor(public auth: AuthService, public  student: StudentService, public creator: CreatorService) {
        console.log('constructor');
    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        this.getData = JSON.parse(this.auth.getSessionData('editor'));
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            content_type: this.getData.content_type,
        };

        try {
            console.log(this.creator?.repositoryDetail(data) , 'preview call');
            return this.creator?.repositoryDetail(data);
        }catch (e) {
            console.log(e , 'e in resol');
        }
    }
}
