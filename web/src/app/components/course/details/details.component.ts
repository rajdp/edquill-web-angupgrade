import {Component, DoCheck, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { EnvironmentService } from 'src/app/environment.service';
import {DatePipe} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import { CommonDataService } from 'src/app/shared/service/common-data.service';
import {Router} from '@angular/router';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { urls } from 'src/app/shared/utils/urls';
import { NewsubjectService } from 'src/app/shared/service/newsubject.service';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, DoCheck {
    rows: any = [];
    public active = 1;
    item: any;
    public columnSize = 12;
    public recordPerPage = 10;
    private modalRef: NgbModalRef;
    public desktopView = window.screen.width > 768;
    public courseDetailsListSearchData = [];
    public webhost: any;

    // @ViewChild('table') table: any;

    @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
    @ViewChild('courseDetail') courseDetail: TemplateRef<any>;

    public selector: string = '.scrollPanel';
    public count = 0;
    public selectedCourseDetail: any;
    public categoryList = [];
    public selectedCategory = [];
    public selectedCourseType = null;
    public selectedStatus = [];
    public courseTypeList = [{value: 'All', id: 'All'}, {value: 'Certified Course', id: 'certified_course'}, {value: 'Popular', id: 'is_exclusive'}, {value: 'One-on-One', id: 'is_exclusive'}, {value: 'Webinar Event', id: 'event'}];
    public courseStatus = [{id: 'D', value: 'Draft'}, {id: 'P', value: 'Ready for review'}, {id: 'A', value: 'Approved'},
        {id: 'R', value: 'Rework'}, {id: 'C', value: 'Cancelled'}];
    public searchedValue: any = '';
    public schoolStatus: any;

    constructor(public auth: AuthService, public newService: NewsubjectService, public modalService: NgbModal, public env: EnvironmentService,
                private datePipe: DatePipe, public builder: FormBuilder, public router: Router, private _commondata: CommonDataService) {
        this.columnSize = this.desktopView ? 12 : 6;
        this.webhost = this.env.imgUrl;
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        if (this.schoolStatus.length != 0) {
            this.newService.schoolChange.subscribe((res: any) => {
                if (res != '') {
                    if (this.router.url.includes('/course/details')) {
                        this.init();
                    }
                } else {
                    this.init();
                }
            });
        }
        this.newService.allowSchoolChange(false);

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

    init() {
        this.getListCourseDetails();
        this.getCategoryList();
    }

    ngOnDestroy(): void {
        this.auth.setSessionData('courseDetailsSearchValue', JSON.stringify({
            category_id: this.selectedCategory,
            status: this.selectedStatus,
            searchValue: this.searchedValue
        }));
    }

    showCourseDetail(detail) {
        console.log(detail, 'preview');
        this.selectedCourseDetail = detail;
        this.modalRef = this.modalService.open(this.courseDetail, {size: 'xl', backdrop: 'static', centered: true});
    }

    editCourseDetails(row) {
        console.log(row, 'getEditcourse');
        this.modalRef ? this.modalRef.close() : '';
        sessionStorage.getCourseDetails = JSON.stringify(row);
        this.router.navigate(['/course/details/edit']);
    }

    searchList() {
        let arrayValue = [];
        if (this.selectedCategory.length != 0) {
            this.courseDetailsListSearchData.forEach((items) => {
                this.selectedCategory.forEach((item1) => {
                    if (items.category_id.includes(item1)) {
                        const checkValueAlreadyExist = arrayValue.some((code => code.course_id == items.course_id));
                        if (!checkValueAlreadyExist) {
                            arrayValue.push(items);
                        }
                    }
                });
            });
        } else {
            arrayValue = this.courseDetailsListSearchData;
        }
        this.selectedStatus.length != 0 ? arrayValue = arrayValue.filter(o1 => this.selectedStatus.some(o2 => o1.status === o2)) : '';
        if (this.selectedCourseType && this.selectedCourseType != 'All') {
            arrayValue = arrayValue.filter((o1) => {
                const courseType = this.selectedCourseType;
                return courseType === 'event' ? o1[courseType] === '1' : o1[courseType] === 'Y';
            });
        }
        const searchValued = this.searchedValue;
        arrayValue = arrayValue.filter(search => {
            return search.course_name.toLowerCase().indexOf(searchValued) !== -1 || search.author.toLowerCase().indexOf(searchValued) !== -1 || search.lessons.toLowerCase().indexOf(searchValued) !== -1 || !searchValued;
        });
        this.rows = arrayValue;
        this.auth.setSessionData('courseDetailsSearchValue', JSON.stringify({
            category_id: this.selectedCategory,
            status: this.selectedStatus,
            searchValue: this.searchedValue
        }));
    }

    getListCourseDetails() {
        const data = {
            course_id: '',
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        console.log(data, 'data');
        this.auth.postService(data, urls.courseList).subscribe(
            (successData) => {
                this.listSuccess(successData);
            },
            (error) => {
                console.error(error, 'booking error');
            }
        );
    }

    listSuccess(successData) {
        this.rows = successData.IsSuccess ? successData.ResponseObject : [];
        this.courseDetailsListSearchData = successData.IsSuccess ? successData.ResponseObject : [];
        this.auth.setSessionData('course_detail_maximumCount', this.courseDetailsListSearchData.length);
        console.log(this.rows, 'rowa');
    }

    getCategoryList() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.auth.postService(data, urls.categoryList).subscribe(
            (successData: any) => {
                this.categoryList = successData.IsSuccess ? successData.ResponseObject : [];
                const getContentListSearch: any = JSON.parse(this.auth.getSessionData('contentListSearchValue'));
                this.selectedCategory = getContentListSearch?.category_id ?? [];
                this.selectedStatus = getContentListSearch?.status ?? [];
                this.searchedValue = getContentListSearch?.searchValue ?? '';
                this.searchList();
                console.log(this.categoryList, 'categoryLisy');
            },
            (error) => {
                console.error(error, 'booking error');
            }
        );
    }

    close() {
        this.modalRef.close();
    }
}
