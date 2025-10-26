import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class RoleGaurd  {

    constructor(private authService: AuthService , public router: Router) {
    }

    canActivate() {
        return !this.authService.loggedIn();
    }
}
