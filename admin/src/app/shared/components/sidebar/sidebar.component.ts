import { Component, Input, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../service/nav.service';
import {AuthService} from '../../service/auth.service';
import {ConfigurationService} from '../../service/configuration.service';
import {SubjectServices} from '../../service/subject.services';
import {SchoolService} from '../../service/School.service';
import {NewsubjectService} from '../../service/newsubject.service';
import {SchoolselectionService} from '../../service/schoolselection.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, AfterViewInit{

  public menuItems: Menu[];
  public url: any;
  public hideSelect: boolean = true;
  public name: any;
  public role: any;
  public profile: any;
  public imgUrl: string;
  public listCheck: boolean;
  public schoolData: any;
  public allowSelect: boolean;
  public allowSearch: boolean;
  public sclName: any;
  public logo: any;

  constructor(private router: Router, public subject: SubjectServices, public navServices: NavService, public auth: AuthService,
              public config: ConfigurationService, public schoolService: SchoolService, public newSubject: NewsubjectService, public select: SchoolselectionService) {
    let url = window.location.href;
    if (url.toString().indexOf('xtracurriculum') > -1) {
      this.logo = 'xtraCurriculum.png';
    }  else if (url.toString().indexOf('elevenace') > -1) {
      this.logo = 'elevenAce.png';
    } else if (url.toString().indexOf('uniqprep') > -1) {
      this.logo = 'uniqprep.png';
    } else if (url.toString().indexOf('safeteen') > -1) {
      this.logo = 'safeTeensOrg.png';
    } else if (url.toString().indexOf('localhost') > -1 || url.toString().indexOf('uthkal') > -1 || url.toString().indexOf('edquill') > -1 || url.toString().indexOf('edveda') > -1) {
      this.logo = 'EdQuill.png';
    }
    this.imgUrl = this.config.getimgUrl();
    this.schoolList();
    this.name = this.auth.getSessionData('rista-firstname') + ' ' + this.auth.getSessionData('rista-lastname');
    this.role = this.auth.getSessionData('go-roleid');
    this.subject.profileList.subscribe((res: any) => {
      this.profile = res;
      let profilepic = this.profile.split('/');
      if (profilepic[0] ==  'assets'){
        this.listCheck = true;
      } else if (profilepic[0] == 'uploads') {
        this.listCheck = false;
      }
    });
    this.select.allowSchool.subscribe((params) => {
      this.allowSelect = !(params != '' && params != false);
    });
    this.select.hideSchool.subscribe((params) => {
      this.hideSelect = params != '' && params != false;
    });
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
            this.setNavActive(items);
            if (!items.children) return false;
            items.children.filter(subItems => {
              let menusplit1 = event.url.split('/');
              let menusplit = subItems.path.split('/');
              if (menusplit[1] === menusplit1[1])
                this.setNavActive(subItems);
              if (!subItems.children) return false;
              subItems.children.filter(subSubItems => {
                let menusplit1 = event.url.split('/');
                let menusplit = subSubItems.path.split('/');
                if (menusplit[1] === menusplit1[1])
                this.setNavActive(subSubItems);
              });
            });
          });
        }
      });
    });
  }
  homeNav() {
    if (this.auth.getRoleId() == '1') {
      this.router.navigate(['/dashboard/default']);
    } else if (this.auth.getRoleId() == '8') {
      this.router.navigate(['/blog/list-blog']);
    }
  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item)
      menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
      menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.path == item.path) {
            menuItem.active = true;
            submenuItems.active = true;
          } else {
            submenuItems.active = false;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }




  ngOnInit(): void {
    this.profile = this.auth.getSessionData('rista-profile_url');
    this.allowSearch = true;
    this.select.searchList(this.allowSearch);
    this.schoolData = 0;
    this.select.listChange(this.schoolData);
    this.hideSelect = true;
    this.select.hideChangeSchool(this.hideSelect);
    let profilepic = this.profile.split('/');
    if (profilepic[0] ==  'assets'){
      this.listCheck = true;
    } else if (profilepic[0] == 'uploads') {
      this.listCheck = false;
    }
  }

  ngAfterViewInit(): void {
    if (this.auth.getSessionData('selected-school') != '' && this.auth.getSessionData('selected-school') != null){
      this.sclName = this.auth.getSessionData('selected-school');
    }else {
      this.sclName = this.auth.getSessionData('rista-school_id');
    }
  }

  schoolList() {
    // this.commondata.showLoader(false);
    const data = {
      platform: 'web',
      type: 'active',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.schoolService.getSchoolList(data).subscribe( (successData) => {
          this.schoolListSuccess(successData);
        },
        (error) => {
          this.schoolListFailure(error);
        });
  }
  schoolListSuccess(successData) {
    if (successData.IsSuccess) {
      // this.commondata.showLoader(false);
      this.schoolData = successData.ResponseObject;
      this.schoolData.unshift({school_name: 'All Institution', school_id: 0});
      this.auth.setSessionData('rista-school_name', this.schoolData[0].school_name);
    }
  }
  schoolListFailure(error) {
    // this.commondata.showLoader(false);
  }
  schoolChangeList(data){
    this.auth.setSessionData('rista-school_id', data);
    this.auth.setSessionData('selected-school', data);
    this.select.listChange(data);
    if (data != 0){
      this.allowSearch = false;
      this.select.searchList(this.allowSearch);
    }else {
      this.allowSearch = true;
      this.select.searchList(this.allowSearch);
    }
  }
}
