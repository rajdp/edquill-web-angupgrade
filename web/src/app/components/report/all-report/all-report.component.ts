import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from 'src/app/shared/service/auth.service';
import {Router} from '@angular/router';
import {CreatorService} from '../../../shared/service/creator.service';
import {NavService} from '../../../shared/service/nav.service';

@Component({
    selector: 'app-all-report',
    templateUrl: './all-report.component.html',
    styleUrls: ['./all-report.component.scss']
})
export class AllReportComponent implements OnInit, OnDestroy {
    protected tabShow = 'reports';
    protected reportDetails: any;
    protected selectContent: any;
    protected contentNameValue: any;
    protected reportData: any;
    protected showAllTab = false;
    protected creatorService = inject(CreatorService);
    protected navService = inject(NavService);
    protected classOrScheduleReport = false;
    protected reportType = '';

    constructor(protected auth: AuthService, protected router: Router) {
        this.reportDetails = JSON.parse(this.auth.getSessionData('All-Reports'));
        if (this.auth.getSessionData('report_type')) {
            this.showAllTab = this.auth.getSessionData('report_type') == 'all';
            this.reportType = this.auth.getSessionData('report_type');
            this.classOrScheduleReport = ['reportFromSchedule', 'reportFromClass'].includes(this.auth.getSessionData('report_type'));
        }
        console.log(this.showAllTab, 'showAllTab');

        console.log(this.classOrScheduleReport, 'classOrScheduleReport');
        this.tabShow = (this.showAllTab || this.reportDetails) && this.reportType != 'viewAnalytics' ? 'reports' : 'viewAnalytics';
        console.log(this.tabShow, 'tabShow');
        console.log(this.reportDetails, 'rd');
        console.log(this.auth.getSessionData('reportCalledFrom'));
    }

    ngOnInit(): void {
        this.reportTab(this.tabShow);
        this.creatorService.changeViewList(true);
        this.navService.collapseSidebar = true;
    }

    ngOnDestroy() {
        this.creatorService.changeViewList(false);
        this.navService.collapseSidebar = false;
    }

    reportTab(type) {
        if (type == 'reports') {
            let data: any;
            data = JSON.parse(this.auth.getSessionData('card-data'));
            if (this.classOrScheduleReport) {
                this.auth.setSessionData('Individual-Class-Report', JSON.stringify(this.reportDetails));
                this.contentNameValue = '';
            } else {
                console.log(this.reportDetails, 'reportDetails');
                this.selectContent = this.reportDetails.content_type == '2' ? 'Assignment' : this.reportDetails.content_type == '3' ? 'Assessment' : 'Resource';
                this.contentNameValue = this.reportDetails.content_id;
                this.auth.setSessionData('Individual-Class-Report', JSON.stringify(data[0]));
                this.auth.setSessionData('Individual-student-Report', JSON.stringify(this.reportDetails));
            }
            this.tabShow = type;
        } else if (type == 'itemized') {
            this.auth.setSessionData('Individual-items-Report', JSON.stringify(this.reportDetails));
            this.reportData = JSON.parse(this.auth.getSessionData('Individual-items-Report'));
            this.tabShow = type;
        } else {
            const satReportDetails = {
                class_id: this.reportDetails?.class_id,
                class_name: this.reportDetails?.class_name,
                student_id: this.auth.getRoleId() == '5' ? this.auth.getUserId() : '0',
                content_id: this.reportDetails ? this.reportDetails?.content_id : '0',
                student_content_id: '0',
                test_type_id: this.reportDetails?.test_type_id ?? '0'
            };
            this.auth.setSessionData('satReportData', JSON.stringify(satReportDetails));
            const reportCalledFrom = this.auth.getSessionData('reportCalledFrom') ?? '';
            const routeTo = reportCalledFrom != '' ? reportCalledFrom : 'classDetails';
            this.auth.setSessionData('reportCalledFrom', routeTo);
            this.tabShow = type;
        }
    }

    backToClass() {
        const reportCalledFrom = this.auth.getSessionData('reportCalledFrom');
        if (reportCalledFrom == 'list') {
            this.router.navigate(['/class/list-class']);
        } else if (reportCalledFrom == 'schedule') {
            this.router.navigate(['/schedule/schedule-page']);
        } else if (['assessment_correction', 'assignment_correction'].includes(reportCalledFrom)) {
            const studentContent = JSON.parse(this.auth.getSessionData('correction_student-content'));
            const redirect = this.auth.getSessionData('correction_return');
            this.auth.setSessionData('student-content', JSON.stringify(studentContent));
            this.auth.setSessionData('correction-return', redirect);
            if (reportCalledFrom == 'assessment_correction') {
                this.router.navigate(['assessment-correction/correction-page']);
            } else {
                this.router.navigate(['assignment-correction/correction-page']);
            }
        } else {
            this.router.navigate([this.auth.getRoleId() == '5' ? 'studentlogin/class-detail' : 'class/topicsAndCurriculum/3']);
        }
    }
}
