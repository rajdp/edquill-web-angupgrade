import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
    page = 'Student';
    public schoolid = '';
    public manageStudent = true;
    public tabs = [
        { key: 'Admin', label: 'Owner/Admin', visible: () => this.auth.getRoleId() === '6' },
        { key: 'Student', label: 'Students', visible: () => this.manageStudent },
        { key: 'Teacher', label: 'Teachers', visible: () => this.auth.getRoleId() !== '4' },
        { key: 'Creator', label: 'Content Creators', visible: () => this.auth.getRoleId() !== '4' },
        { key: 'Parent', label: 'Parents/Guardians', visible: () => true }
    ];

    constructor(public category: CategoryService, public config: NgbModalConfig, public confi: ConfigurationService, private newSubject: NewsubjectService, public auth: AuthService, public commondata: CommonDataService, public route: Router) {
        this.newSubject.schoolChange.subscribe(params => {
            if (params != '') {
                if (this.route.url.includes('user-list')) {
                    this.init();
                }
            } else {
              this.init();
            }
        });
        if (this.auth.getSessionData('UsersRedirection')) {
            this.page = this.auth.getSessionData('UsersRedirection');
            this.auth.removeSessionData('UsersRedirection');
        }
    }

    ngOnInit() {

    }

    init() {
        this.manageStudent = this.auth.manageStudent || this.auth.showStudentEmailId;
        if (this.auth.getRoleId() == '4') {
            this.page = this.manageStudent ? 'Student' : '';
        } else if (this.auth.getRoleId() == '6') {
            this.page = 'Admin';
        } else {
            this.page = this.auth.getRoleId() != '2' ? 'Admin' : 'Student';
        }
        this.schoolid = this.auth.getSessionData('school_id');
    }
}

