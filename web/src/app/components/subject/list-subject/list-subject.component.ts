import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CategoryService} from '../../../shared/service/category.service';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {Router} from '@angular/router';
import {NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SubjectServices} from '../../../shared/service/subject.services';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../shared/service/common.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
    selector: 'app-list-subject',
    templateUrl: './list-subject.component.html',
    styleUrls: ['./list-subject.component.scss']
})
export class ListSubjectComponent implements OnInit {
    public listData: any;
    public deleteUser: any;
    private modalRef: NgbModalRef;
    public closeResult: string;
    public schoolData: any;
    public teacherschool: any;
    public schoolid: any;
    public manageSubject = true;
    public allowSelect: boolean;
    public schoolStatus: any;
    @ViewChild('content') modalContent: TemplateRef<any>;

    constructor(public category: CategoryService, public config: NgbModalConfig, private modalService: NgbModal,
                public auth: AuthService, public commondata: CommonDataService, public route: Router, public subjectservice: SubjectServices,
                public toastr: ToastrService, public common: CommonService, public newSubject: NewsubjectService) {
        config.backdrop = 'static';
        config.keyboard = false;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.auth.setSessionData('resourceAccess', false);
        this.auth.setSessionData('browseAll', false);
        this.auth.removeSessionData('classData');
        this.auth.removeSessionData('readonly_data');
        this.auth.removeSessionData('readonly_startdate');
        this.auth.removeSessionData('updatedStudent');
        this.auth.removeSessionData('editView');
        this.auth.setSessionData('contentType', '');
        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.route.url.includes('list-subject')) {
                        this.init();
                    }
                } else {
                    this.init();
                }
            });
        }
        this.allowSelect = false;
        this.newSubject.allowSchoolChange(this.allowSelect);
    }

    ngOnInit() {
        this.auth.removeSessionData('backOption');
    }

    init() {
        if (this.auth.getRoleId() == '4') {
            this.teacherschool = JSON.parse(this.auth.getSessionData('rista_data1'));
            if (this.teacherschool.permissions[2].allowNav) {
                this.subjectList();
            } else {
                this.route.navigate(['/home/list-home']);
            }
        } else {
            this.subjectList();
        }
        this.manageSubject = this.auth.manageClass;
    }

    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'edit') {
            if (this.manageSubject) {
                this.auth.setSessionData('editsubject', JSON.stringify(event.emitData));
                this.route.navigate(['/subject/create-subject/edit']);
            } else if (!this.manageSubject) {
                this.toastr.error('You don\'t have permission to update the subject details');
            }
        }
    }

    showModal() {
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    onSave() {
        this.modalRef.close();
    }

    subjectList() {
        this.commondata.showLoader(true);
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.subjectservice.getSubjectList(data).subscribe((successData) => {
                this.subjectListSuccess(successData);
            },
            (error) => {
                this.subjectListFailure(error);
            });
    }

    subjectListSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            this.listData = successData.ResponseObject;
            this.listData.forEach((value, index, array) => {
                this.listData[index].status = this.listData[index].status == 1 ? 'Active' : this.listData[index].status == 2 ?
                    'Suspended' : this.listData[index].status == 3 ? 'Disengaged' : this.listData[index].status == 4 ? 'Deleted' : '';
            });
        }
    }

    subjectListFailure(error) {
        this.commondata.showLoader(false);
        console.log(error, 'error');
    }

}

