import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET} from '@angular/router';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {AuthService} from '../../service/auth.service';
import {CreatorService} from '../../service/creator.service';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../feather-icons/feather-icons.component';

@Component({
    selector: 'app-breadcrumb',
    standalone: true,
    imports: [CommonModule, RouterModule, FeatherIconsComponent],
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    public breadcrumbs;
    public title: string;
    public href: string;
    public roleid: any;
    public sideNavStatus: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router, public auth: AuthService, public creator: CreatorService) {
        this.href = this.router.url;
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }))
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(route => {
                const snapshot = this.router.routerState.snapshot;
                let title: string;
                if (route.snapshot.data['id'] && (this.roleid == '2' || this.roleid == '6')) {
                    title = route.snapshot.data['adminTitle'];
                } else if (route.snapshot.data['data1'] && (this.roleid == '6')) {
                    title = route.snapshot.data['corporateTitle'];
                } else if (route.snapshot.url[1]?.path == '2' && route.snapshot.data['status']) {
                    title = route.snapshot.data['secondtitle'];
                } else if (this.auth.getSessionData('preview_type') == 'yes') {
                    title = route.snapshot.data['student_title'];
                } else if (this.auth.getSessionData('preview_type') == 'no') {
                    title = route.snapshot.data['teacher_title'];
                } else {
                    title = route.snapshot.data['title'];
                }
                // let title = route.snapshot.data['title'];

                const parent = route.parent.snapshot.data['breadcrumb'];
                const child = route.snapshot.data['breadcrumb'];
                this.breadcrumbs = {};
                this.title = title;
                this.breadcrumbs = {
                    'parentBreadcrumb': parent,
                    'childBreadcrumb': child
                };
            });
        this.roleid = this.auth.getRoleId();
        this.creator.contentView.subscribe((res: any) => {
            if (this.router.url == '/content-text-resource/question-paper/add' || this.router.url == '/content-text-resource/question-paper/edit') {
                console.log(res);
                if (res == true) {
                    this.sideNavStatus = res;
                } else if (res != true || res == '' || res == null) {
                    this.sideNavStatus = res;
                }
            } else {
                this.sideNavStatus = false;
            }
        });
    }

    ngOnInit() {
    }

}
