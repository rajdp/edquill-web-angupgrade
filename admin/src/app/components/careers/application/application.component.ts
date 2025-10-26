import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { AuthService} from '../../../shared/service/auth.service';
import {CareersService} from '../../../shared/service/careers.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  careerData: any;
  constructor(private auth: AuthService, private router: Router) {
    this.careerData = JSON.parse(this.auth.getSessionData('careers-list'));
    console.log(this.careerData, 'data');
  }
  ngOnInit() {

  }
  viewMore(list) {
    this.auth.setSessionData('careers-list', JSON.stringify(list));
    this.router.navigate(['/careers/resume-details']);
  }
}
