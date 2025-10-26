import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from './windows.service';
import {LoginService} from "./login.service";
import {AuthService} from "./auth.service";
// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any;
	public MENUITEMS: Menu[];
	public roleId: any;
	public collapseSidebar: boolean = false;
	public items: any;

	constructor(@Inject(WINDOW) private window, public login: LoginService, public auth: AuthService) {
		this.onResize();
		if (this.screenWidth < 1100) {
			this.collapseSidebar = true;
		}
		this.login.homeList.subscribe((res: any) => {
			if (res != ''){
				this.roleId = res;
			} else {
				this.roleId = this.auth.getRoleId();
			}
			if (this.roleId === '1' || this.roleId === 1) {
				this.MENUITEMS = [
					{
						path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
					},
					{
						title: 'Curriculum', icon: 'archive', type: 'sub', active: false, children: [
							{
								title: 'Books', icon: 'clipboard', path: '/Books/list-Books', type: 'link', active: false
							},
							{
								title: 'Content Folder', icon: 'clipboard',  path: '/classroom/list-classroom', type: 'link', active: false
							},
							{
								title: 'Content-Repository', icon: 'clipboard', path: '/repository/content-home', type: 'link', active: false
							}
						]
					},
					{
						title: 'Users', icon: 'users', type: 'sub', active: false, children: [
							{
								title: 'Admin' , icon: 'clipboard' , path: '/admin/list-admin' , type: 'link' , active: false
							},

							{
								title: 'Teacher', icon: 'clipboard',  path: '/Teacher/list-Teacher', type: 'link', active: false
							},
							{
								title: 'student', icon: 'clipboard', path: '/student/list-student', type: 'link', active: false
							},
							{
								title: 'Content-Creator', icon: 'clipboard',  path: '/Content-Creator/list-Content', type: 'link', active: false
							},
							{
								title: 'Institution', icon: 'clipboard', path: '/School/list-School', type: 'link', active: false
							},
							{
								title: 'Private Tutor', icon: 'clipboard',  path: '/Individual-Teacher/list-individual', type: 'link', active: false
							},
							{
								title: 'Corporates' , icon: 'clipboard' , path: '/corporates/list-corporates' , type: 'link' , active: false
							},
						]
					},
					{
						title: 'Static Data', icon: 'bar-chart-2', type: 'sub', active: false, children: [
							{
								title: 'Grade', icon: 'clipboard', path: '/grade/list-grade', type: 'link', active: false
							},
							{
								title: 'subject', icon: 'clipboard', path: '/subject/list-subject', type: 'link', active: false
							},
						]
					},
					{
						title: 'Settings', icon: 'settings', path: '/settings/list-Settings', type: 'link', active: false,
					},
					{
						title: 'Careers', icon: 'monitor', path: '/careers/careers-list', type: 'link', active: false,
					},
					{
						title: 'Blog', icon: 'monitor', path: '/blog/list-blog', type: 'link', active: false,
					},
					{
						title: 'Testimonial', icon: 'monitor', path: '/testimonial/list-testimonial', type: 'link', active: false,
					},
				];
				// Array
				this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
			} else if (this.roleId === '8' || this.roleId === 8) {
				this.MENUITEMS = [
					{
						title: 'Careers', icon: 'monitor', path: '/careers/careers-list', type: 'link', active: false,
					},
					{
						title: 'Blog', icon: 'monitor', path: '/blog/list-blog', type: 'link', active: false,
					},
					{
						title: 'Testimonial', icon: 'monitor', path: '/testimonial/list-testimonial', type: 'link', active: false,
					},
				];
				// Array
				this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
			}
		});
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}
}
