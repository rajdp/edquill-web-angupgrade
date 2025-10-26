import {Component, inject} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-global-announcement',
    templateUrl: './global-announcement-list.component.html',
    styleUrls: ['./global-announcement-list.component.scss']
})
export class GlobalAnnouncementListComponent {

    public globalAnnouncementListData: any = [];
    public auth = inject(AuthService);
    public toastr = inject(ToastrService);
    public route = inject(Router);
    public schoolStatus: any;

    constructor() {
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.globalAnnouncementList();
    }

    globalAnnouncementList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.postService(payload, 'school/announcementList').subscribe((successData: any) => {
            console.log(successData, 'successData');
            this.globalAnnouncementListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.globalAnnouncementListData.forEach(value => {
                value.status_name = value.status == '1' ? 'Active' : value.status == '2' ? 'Suspended' :
                    value.status == '3' ? 'Disengaged' : 'Deleted';
            });
            console.log(this.globalAnnouncementListData, 'globalAnnouncementListData');
        }, (error) => console.error(error, 'error_globalAnnoucement'));
    }

    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'edit') {
            this.auth.setSessionData('edit_global_announcement', JSON.stringify(event.emitData));
            this.route.navigate(['/global-announcement/create-announcement/edit']);
        }
    }
}
