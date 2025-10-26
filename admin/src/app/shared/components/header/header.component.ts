import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../service/nav.service';
import {Router} from '@angular/router';
import {ConfigurationService} from '../../service/configuration.service';
import {AuthService} from '../../service/auth.service';
import {SubjectServices} from '../../service/subject.services';
import {SchoolselectionService} from '../../service/schoolselection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public right_sidebar: boolean = false;
  public open: boolean = false;
  public openNav: boolean = false;
  public isOpenMobile : boolean;
  public imgUrl: string;
  public profile: any;
  public listCheck: any;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService, public subject: SubjectServices, public router: Router,
              public config: ConfigurationService, public auth: AuthService, public select: SchoolselectionService) {
    this.imgUrl = this.config.getimgUrl();

    this.select.contentSideView.subscribe((res: any) => {
      if (res == true) {
        this.open = true;
        this.navServices.collapseSidebar = true;
      } else if (res != true || res == '' || res == null) {
        this.open = false;
        this.navServices.collapseSidebar = false;

      }
      // this.name = this.auth.getSessionData('rista-firstname') + ' ' +  this.auth.getSessionData('rista-lastname');
    });
  }

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/auth/login']);

  }
  homeNav() {
    if (this.auth.getRoleId() == '1') {
      this.router.navigate(['/dashboard/default']);
    } else if (this.auth.getRoleId() == '8') {
      this.router.navigate(['/blog/list-blog']);
    }
  }


  ngOnInit() {
    this.subject.cast.subscribe(data => {
      this.profile = data;
      let profilepic = this.profile.split('/');
      if(profilepic[0] ==  'assets'){
        this.listCheck = true;
      } else {
        this.listCheck = false;

      }
    });
    this.profile = this.auth.getSessionData('rista-profile_url');
    let profilepic = this.profile.split('/');
    if(profilepic[0] ==  'assets'){
      this.listCheck = true;
    } else {
      this.listCheck = false;

    }
    // this.profile1 = this.auth.getSessionData('go-profile_url');
  }
}
