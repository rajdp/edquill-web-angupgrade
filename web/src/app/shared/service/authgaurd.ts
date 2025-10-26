import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

import {AuthService} from './auth.service';


@Injectable()
export class AuthGuardService  {


    constructor(private authService: AuthService , public router: Router) {
    }

    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}
