import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {SubjectServices} from '../../service/subject.services';
import {ConfigurationService} from '../../service/configuration.service';
import {Menu, NavService} from '../../service/nav.service';
import {NavigationEnd, Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {environment} from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';

@Component({
    selector: 'app-right-sidebar-mob',
    standalone: true,
    imports: [CommonModule, RouterModule, FeatherIconsComponent],
    templateUrl: './right-sidebar-mob.component.html',
    styleUrls: ['./right-sidebar-mob.component.scss']
})
export class RightSidebarMobComponent implements OnInit {

    public version = environment.version;
    public menuItems: Menu[];
    public url: any;
    public name: any;
    public role: any;
    public profile: any;
    public imgUrl: string;
    public listCheck: boolean;
    public schoolName: any;

    constructor(private router: Router, public subject: SubjectServices, public login: LoginService, public navServices: NavService, public auth: AuthService, public config: ConfigurationService) {
        this.imgUrl = this.config.getimgUrl();
        const firstname = this.auth.getSessionData('firstname') || '';
        const lastname = this.auth.getSessionData('lastname') || '';
        this.name = (firstname + ' ' + lastname).trim() || 'User';
        this.role = this.auth.getRoleId();
        if (this.role == 2) {
            this.schoolName = this.auth.getSessionData('school_name');
        } else if (this.role == 3) {
            this.schoolName = this.auth.getSessionData('schooldetails');
        } else if (this.role == 4) {
            this.schoolName = this.auth.getSessionData('school_name');
        }
        this.subject.profileList.subscribe((res: any) => {
            this.profile = res;
            const profilepic = this.profile.split('/');
            if (profilepic[0] == 'assets') {
                this.listCheck = true;
            } else if (profilepic[0] == 'uploads') {
                this.listCheck = false;
            }
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
                            if (subItems.path === event.url)
                                this.setNavActive(subItems);
                            if (!subItems.children) return false;
                            subItems.children.filter(subSubItems => {
                                if (subSubItems.path === event.url)
                                    this.setNavActive(subSubItems);
                            });
                        });
                    });
                }
            });
        });
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
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true;
                        submenuItems.active = true;
                    }
                });
            }
        });
    }

    activeMenu(i) {
        this.menuItems.forEach((items, index) => {
            if (index == i) {
                items.active = !items.active;
            } else {
                items.active = false;
            }
        });
    }

    // Click Toggle menu
    toggletNavActive(item) {
        if (!item.active) {
            this.menuItems.forEach(a => {
                if (this.menuItems.includes(item))
                    a.active = false;
                if (!a.children) return false;
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false;
                    }
                });
            });
        }
        item.active = !item.active;
        console.log(item.active, 'active');
    }

    readUrl(event: any) {
        if (event.target.files.length === 0)
            return;
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
        if (this.role == 4) {
            this.profile = this.auth.getSessionData('school_profile');
        } else {
            this.profile = this.auth.getSessionData('school_profile_url');
        }
        const profilepic = this.profile.split('/');
        if (profilepic[0] == 'assets') {
            this.listCheck = true;
        } else if (profilepic[0] == 'uploads') {
            this.listCheck = false;
        }
    }
}
