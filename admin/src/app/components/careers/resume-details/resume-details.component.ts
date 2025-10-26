import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {CareersService} from "../../../shared/service/careers.service";
import {ViewComponent} from "../../Books/list-Books/list-Books.component";
import {Router} from "@angular/router";
import {ConfigurationService} from "../../../shared/service/configuration.service";

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.scss']
})
export class ResumeDetailsComponent implements OnInit {
public careerData: any;
public resumeData: any;
public webhost: any;
  constructor(private auth: AuthService, public careersService: CareersService, public route: Router, public confi: ConfigurationService) {
    this.webhost = this.confi.getimgUrl();
    this.careerData = JSON.parse(this.auth.getSessionData('careers-list'));
    this.jobDetailsCareersList();
  }
  public settings = {
    hideSubHeader: false,
    actions: {
      custom: [
        {
          name: 'resumeDocument',
          title: '<i class="fa fa-file-text-o letter" title="Resume"></i>'
        },
      ],
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },


    columns: {
      name: {
        title: 'Name',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;

        }
      },
      email: {
        title: 'Email Id',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;

        }
      },
      portfolio: {
        title: '' +
            'Portfolio Url',
        type: 'html',
        valuePrepareFunction: (data) => {
          return `<span class="text-capitalize cursor">${data}</span>`;

        }
      },
    }
  };

  ngOnInit(): void {
  }
  onCustomAction(event) {
    console.log(event, 'event');
    switch ( event.action) {
      case 'resumeDocument':
        window.open(this.webhost + '/' + event.data.resume_url);
        break;
    }
  }
  jobDetailsCareersList(){
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
      job_id: this.careerData.id
    };
    this.careersService.jobDetailsCareersList(data).subscribe((successData) => {
          this.jobDetailsSuccess(successData);
        },
        (error) => {
          console.error(error, 'error_contentCreator');
        });
  }
  jobDetailsSuccess(successData){
    if (successData.IsSuccess) {
      this.resumeData = successData.ResponseObject;
      console.log(this.resumeData, 'data');
    }
  }
}
