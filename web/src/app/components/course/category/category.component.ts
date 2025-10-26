import {Component, DoCheck, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { EnvironmentService } from 'src/app/environment.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { urls } from 'src/app/shared/utils/urls';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, DoCheck, OnDestroy {
    private modalRef: NgbModalRef;
    // @ViewChild('table') table: any;

    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
    @ViewChild('categoryViewList') categoryViewList: TemplateRef<any>;
    public categoryListData = [];
    public categoryListSearchData = [];
    public selectedCategoryList: any;
    public searchedValue: any = '';

    constructor(public auth: AuthService, public router: Router,
                public modalService: NgbModal, public env: EnvironmentService, public builder: FormBuilder) {
        this.getCategoryList();
    }


    ngOnInit() {
    }

    ngDoCheck(): void {
        setTimeout(() => {
            if (this.table) {
                this.table.recalculate();
            }
        }, 0)
    }

    ngOnDestroy(): void {
        console.log('OnDestro');
        this.auth.setInputSearchValue('courseCategory', this.searchedValue);
    }

    close() {
        this.modalRef.close();
    }

    getEditcourse(row) {
        console.log(row, 'getEditcourse');
        this.modalRef ? this.modalRef.close() : '';
        this.auth.setSessionData('edit_course_category_Data', JSON.stringify(row));
        this.router.navigate(['/course/category/edit']);
    }

    showCategoryList(detail) {
        console.log(detail, 'preview');
        this.selectedCategoryList = detail;
        this.modalRef = this.modalService.open(this.categoryViewList, {size: 'xl', backdrop: 'static', centered: true});
    }

    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.categoryList).subscribe(
            (successData) => {
                this.categorylistSuccess(successData);
            },
            (error) => {
                console.error(error, 'booking error');
            }
        );
    }

    categorylistSuccess(successData) {
        if (successData.IsSuccess) {
            this.categoryListData = successData.ResponseObject;
            this.categoryListSearchData = successData.ResponseObject;
            this.auth.setSessionData('course_category_maximumCount', this.categoryListData.length);
            this.searchedValue = this.auth.getInputSearchValue('courseCategory');
            this.searchFunction();
            console.log(this.searchedValue, 'sear');
        } else {
            this.categoryListData = [];
            this.categoryListSearchData = [];
        }
    }

    searchFunction() {
        const searchValued = this.searchedValue.toLowerCase();
        this.auth.setInputSearchValue('courseCategory', this.searchedValue);
        const temp = this.categoryListSearchData.filter(search => {
            return search.category_name.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.categoryListData = temp;
        console.log(this.categoryListData, 'categoryListSearchData');
    }
}
