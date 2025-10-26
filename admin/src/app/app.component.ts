import { Component } from '@angular/core';
import {EnvironmentService} from './environment.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multikart-backend';
  allow: boolean ;
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  constructor(public environService: EnvironmentService, private titleService: Title){
    let url = window.location.href;
    if (url.toString().indexOf('xtracurriculum') > -1) {
      this.favIcon.href = 'assets/xtraCurriculum.ico';
      this.titleService.setTitle('XtraCurriculum');
    } else if (url.toString().indexOf('safeteen') > -1) {
      this.favIcon.href = 'assets/safeteen.png';
      this.titleService.setTitle('Safeteens - by the Teens for the Teens');
    } else if (url.toString().indexOf('elevenace') > -1) {
      this.favIcon.href = 'assets/elevenAce.ico';
      this.titleService.setTitle('ElevenAce');
    }else if (url.toString().indexOf('uniqprep') > -1) {
      this.favIcon.href = 'assets/uniqprep.png';
      this.titleService.setTitle('Uniq Prep');
    } else if (url.toString().indexOf('edveda') > -1) {
      this.favIcon.href = 'assets/edquill.ico';
      this.titleService.setTitle('EdVeda');
    } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1) {
        this.favIcon.href = 'assets/edquill.ico';
        this.titleService.setTitle('EdQuill');
    }
    this.environService.envRecieved.subscribe((res) => {
      this.allow = res;
    });
  }
}
