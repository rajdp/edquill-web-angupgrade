import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit, ChangeDetectorRef, NgZone, ApplicationRef, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  styleUrls: ['./content-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLayoutComponent implements OnInit {
  public allowDashboard: any;
  public right_side_bar: boolean = false;
  public layoutType: string = 'RTL';
  public layoutClass: boolean = false;
  public imgUrl: string;
  public profile: any;
  isHovered = false;
  public showMobView = false;
  public hideForBreadcrumb: boolean = true; // Initialize as property instead of getter
  public creatorService = inject(CreatorService);
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.showMobView = this.env.deviceType();
    this.updateHideForBreadcrumb(); // Update breadcrumb visibility when view changes
    this.cdr.markForCheck();
  }
  constructor(public navServices: NavService, public env: EnvironmentService,
              public auth: AuthService, public commondata: CommonDataService, public config: ConfigurationService,
              private cdr: ChangeDetectorRef, private ngZone: NgZone, private appRef: ApplicationRef) {
    this.imgUrl = this.config.getimgUrl();
    this.profile = this.auth.getSessionData('profile_url');
    this.showMobView = this.env.deviceType();
    // Removed automatic sidebar control subscription to prevent auto-hide/show behavior
    // this.creatorService.contentView.subscribe((res: any) => {
    //   // Use proper change detection to avoid assertion errors
    //   this.ngZone.run(() => {
    //     this.isHovered = !(res == true);
    //     this.auth.setSideBarOpened(this.isHovered);
    //     this.cdr.markForCheck(); // Use markForCheck for OnPush strategy to avoid infinite loops
    //   });
    // });

    this.commondata.loader.pipe(takeUntilDestroyed()).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  onSidebarHover() {
    if (this.navServices.collapseSidebar) {
      this.isHovered = true;
      this.auth.setSideBarOpened(true);
      this.cdr.markForCheck();
    }
  }

  onSidebarLeave() {
    if (this.navServices.collapseSidebar) {
      this.isHovered = false;
      this.auth.setSideBarOpened(false);
      this.cdr.markForCheck();
    }
  }

  public rightSidebar($event) {
    this.right_side_bar = $event;
    this.cdr.markForCheck();
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
    this.cdr.markForCheck();
  }

  ngOnInit() {
    // Initialize properties to avoid ExpressionChangedAfterItHasBeenCheckedError
    this.allowDashboard = this.auth.getSessionData('default_password');
    this.right_side_bar = false; // Initialize to prevent undefined state
    this.layoutClass = false; // Initialize to prevent undefined state
    
    // Calculate hideForBreadcrumb value
    this.updateHideForBreadcrumb();
  }

  private updateHideForBreadcrumb() {
    const url = window.location.href;
    this.hideForBreadcrumb = !this.showMobView && (!url.includes('student/dashboard') && !url.includes('report/report') &&
        !url.includes('studentlogin/answering') && !url.includes('sat-report'));
  }

}
