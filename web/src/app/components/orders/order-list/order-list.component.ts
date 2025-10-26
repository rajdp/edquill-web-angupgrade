import {Component, DoCheck, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {urls} from '../../../shared/utils/urls';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {AuthService} from '../../../shared/service/auth.service';
import {CommonDataService} from '../../../shared/service/common-data.service';
import {NewsubjectService} from "../../../shared/service/newsubject.service";

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy, DoCheck {

    public orderListData = [];
    public rows = [];
    public recordPerPage = 10;
    searchedValue: any = '';
    public orderListPage: Subscription;
    public schoolStatus: any = {};
    @ViewChild(DatatableComponent, {static: false}) ngxTable: DatatableComponent;

    constructor(public auth: AuthService, public router: Router, public Common: CommonDataService, public newService: NewsubjectService) {
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res: any) => {
                if (res != '') {
                    if (this.router.url.includes('list-class')) {
                        this.getOrderList();
                    }
                } else {
                    this.getOrderList();
                }
            });
        }
    }

    ngDoCheck(): void {
        setTimeout(() => {
            if (this.ngxTable) {
                this.ngxTable.recalculate();
            }
        }, 0);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.orderListPage) {
            this.orderListPage.unsubscribe();
        }
    }

    getOrderList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        }
        this.auth.postService(payload, urls.orderList).subscribe((successData: any) => {
            console.log(successData, 'subject_sucessData');
            successData.ResponseObject.forEach(data => data.full_name = data.first_name != '' && data.first_name ? (data.first_name + ' ' + data.last_name) : '-');
            this.orderListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.rows = successData.IsSuccess ? successData.ResponseObject : [];
            console.log(this.rows, 'rows');
            this.searchList();
        }, error => {
            console.error(error, 'error');
        });
    }

    searchList() {
        let arrayValue = this.orderListData;
        const searchValued = this.searchedValue.trimStart();
        arrayValue = arrayValue.filter(search => {
            return search.payment_id.toLowerCase().indexOf(searchValued) !== -1 || search.full_name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.rows = arrayValue;
        console.log(arrayValue, 'aara');
    }

}
