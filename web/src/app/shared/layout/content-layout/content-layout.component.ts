import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit, ChangeDetectorRef, NgZone, ApplicationRef } from '@angular/core';
import { NavService } from '../../service/nav.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, zoomOut, zoomIn, fadeIn, bounceIn } from 'ng-animate';
import {AuthService} from '../../service/auth.service';
import {CommonDataService} from '../../service/common-data.service';
import {ConfigurationService} from '../../service/configuration.service';
import {EnvironmentService} from '../../../environment.service';
import {CreatorService} from '../../service/creator.service';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { RightSidebarMobComponent } from '../../components/right-sidebar-mob/right-sidebar-mob.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Header2Component } from '../../components/header2/header2.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    Header2Component,
    SidebarComponent,
    RightSidebarComponent,
    RightSidebarMobComponent,
    BreadcrumbComponent,
    FooterComponent
  ],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  public allowDashboard: any;
  public right_side_bar: boolean;
  public layoutType: string = 'RTL';
  public layoutClass: boolean = false;
  public imgUrl: string;
  public profile: any;
  isHovered = false;
  public showMobView = false;
  public creatorService = inject(CreatorService);
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.showMobView = this.env.deviceType();
  }
  constructor(public navServices: NavService, public env: EnvironmentService,
              public auth: AuthService, public commondata: CommonDataService, public config: ConfigurationService,
              private cdr: ChangeDetectorRef, private ngZone: NgZone, private appRef: ApplicationRef) {
    this.imgUrl = this.config.getimgUrl();
    this.profile = this.auth.getSessionData('profile_url');
    this.showMobView = this.env.deviceType();
    this.creatorService.contentView.subscribe((res: any) => {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.ngZone.run(() => {
            this.isHovered = !(res == true);
            this.auth.setSideBarOpened(this.isHovered);
          });
        }, 0);
      });
    });
  }

  onSidebarHover() {
    if (this.navServices.collapseSidebar) {
      this.isHovered = true;
      this.auth.setSideBarOpened(true);
    }
  }

  onSidebarLeave() {
    if (this.navServices.collapseSidebar) {
      this.isHovered = false;
      this.auth.setSideBarOpened(false);
    }
  }

  public rightSidebar($event) {
    this.right_side_bar = $event;
  }

  public clickRtl(val) {
    if (val === 'RTL') {
      document.body.className = 'rtl';
      this.layoutClass = true;
      this.layoutType = 'LTR';
    } else {
      document.body.className = '';
      this.layoutClass = false;
      this.layoutType = 'RTL';
    }
  }

  ngOnInit() {
    // this.commondata.showLoader(true);
    // Initialize allowDashboard here to avoid ExpressionChangedAfterItHasBeenCheckedError
    this.allowDashboard = this.auth.getSessionData('default_password');
  }

  get hideForBreadcrumb() {
    const url = window.location.href;
    return !this.showMobView && (!url.includes('student/dashboard') && !url.includes('report/report') &&
        !url.includes('studentlogin/answering') && !url.includes('sat-report'));
  }

}
