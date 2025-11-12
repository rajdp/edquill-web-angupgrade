import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ConnectionService } from 'ng-connection-service';
import { DeviceDetectorService } from 'ngx-device-detector';

import { EnvironmentService } from './environment.service';
import { ZoomServiceService } from './shared/service/zoom-service.service';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly envService = inject(EnvironmentService);
  private readonly deviceService = inject(DeviceDetectorService);
  private readonly titleService = inject(Title);
  private readonly connectionService = inject(ConnectionService);
  private readonly zoomService = inject(ZoomServiceService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  private readonly auth = inject(AuthService);

  readonly allow = signal(false);
  readonly zoomAllowed = signal(true);
  readonly hasInternet = signal(true);

  favIcon: HTMLLinkElement | null = document.querySelector('#appIcon');

  constructor() {
    const url = window.location.href;
    this.configureBranding(url);

    this.connectionService.monitor().subscribe(isConnected => {
      this.hasInternet.set(isConnected.hasNetworkConnection);
      this.cdr.detectChanges();
    });

    this.envService.envRecieved.subscribe(res => {
      this.allow.set(res);
      this.cdr.detectChanges();
    });

    this.zoomService.cast.subscribe(data => {
      if (data === true) {
        window.location.reload();
        this.cdr.detectChanges();
      }
    });

    this.handleInitialNavigation(url);
  }

  private configureBranding(url: string): void {
    if (!this.favIcon) {
      return;
    }

    if (url.includes('xtracurriculum')) {
      this.favIcon.href = 'assets/xtraCurriculum.ico';
      this.titleService.setTitle('XtraCurriculum');
    } else if (url.includes('safeteen')) {
      this.favIcon.href = 'assets/safeteen.png';
      this.titleService.setTitle('Safeteens - by the Teens for the Teens');
    } else if (url.includes('elevenace')) {
      this.favIcon.href = 'assets/elevenAce.ico';
      this.titleService.setTitle('ElevenAce');
    } else if (url.includes('uniqprep')) {
      this.favIcon.href = 'assets/uniqprep.png';
      this.titleService.setTitle('Uniq Prep');
    } else if (url.includes('edveda')) {
      this.favIcon.href = 'assets/edquill.ico';
      this.titleService.setTitle('EdVeda');
    } else if (url.includes('localhost') || url.includes('uthkal') || url.includes('edquill')) {
      this.favIcon.href = 'assets/edquill.ico';
      this.titleService.setTitle('EdQuill');
    }
  }

  private handleInitialNavigation(url: string): void {
    const checkForForgotPassword = url.includes('forgotPassword');
    const checkForSetPassword = url.includes('setPassword');
    const checkEnrollClassCode = url.includes('enrollclasscode');
    const checkStudentRegister = url.includes('studentRegister');
    const checkSelfRegistration = url.includes('#/register');
    const viewPDF = url.includes('viewAnswerKeyPdf');
    const preview = url.includes('contentFolder/preview');
    const googleSignIn = url.includes('googleSignIn');
    const googleStudentRegister = url.includes('googleStudentRegister');
    const tutorConnect = url.includes('tutorconnect');
    const checkForIPADApp = url.includes('student-annotation') || url.includes('source-link') ||
      url.includes('student-scratch') || url.includes('graphing') || url.includes('ipad-question-view');

    if (checkForForgotPassword || checkEnrollClassCode || checkStudentRegister || checkSelfRegistration || viewPDF || preview ||
      googleSignIn || googleStudentRegister || tutorConnect || checkForSetPassword) {
      return;
    }

    const splitUrl = url.split('#');

    if (this.auth.loggedIn()) {
      if (splitUrl.length === 1 || (splitUrl.length === 2 && ['', '/'].includes(splitUrl[1]))) {
        this.navigateByRole();
      } else {
        this.router.navigate([splitUrl[1]]);
      }
    } else if (this.deviceService.getDeviceInfo().os !== 'iOS' &&
      (this.deviceService.getDeviceInfo().os !== 'Mac' || !this.deviceService.isTablet())) {
      if (!checkForIPADApp) {
        this.router.navigate(['/auth/login']);
      }
    } else if (!checkForIPADApp) {
      this.router.navigate(['/auth/login']);
    }
  }

  private navigateByRole(): void {
    const roleId = this.auth.getRoleId();
    if (['1', '2', '4'].includes(roleId)) {
      this.router.navigate(['/class/list-class']);
    } else if (roleId === '3') {
      this.router.navigate(['/repository/content-home']);
    } else if (roleId === '5') {
      this.router.navigate(['/student/dashboard']);
    } else if (roleId === '6') {
      this.router.navigate(['/dashboard/default']);
    } else if (roleId === '7') {
      this.router.navigate(['/student-content/list-content/old']);
    }
  }
}
