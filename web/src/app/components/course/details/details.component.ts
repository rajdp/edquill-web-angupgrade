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
    filteredRows: any = [];
    public active = 1;
    item: any;
    public columnSize = 12;
    public recordPerPage = 10;
    private modalRef: NgbModalRef;
    public desktopView = window.screen.width > 768;
    public courseDetailsListSearchData = [];
    public webhost: any;
    public courseSearchText = '';

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
        this.init();
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

    addClassForCourse(course: any) {
        if (!course) {
            return;
        }
        this.auth.setSessionData('filter_course_id', course.course_id);
        this.auth.setSessionData('filter_course_name', course.course_name);
        this.router.navigate(['/class/create-class/add'], {
            queryParams: {
                course_id: course.course_id,
                course_name: course.course_name
            }
        });
    }

    viewClasses(course: any) {
        console.log('View classes for course:', course);
        // Store course info for filtering classes
        this.auth.setSessionData('filter_course_id', course.course_id);
        this.auth.setSessionData('filter_course_name', course.course_name);
        // Navigate to class list with course filter
        this.router.navigate(['/class/list-class'], {
            queryParams: {
                course_id: course.course_id,
                course_name: course.course_name
            }
        });
    }

    navigateToSEO(course: any) {
        console.log('Navigate to SEO for course:', course);
        // Store course info for SEO page
        this.auth.setSessionData('filter_course_id', course.course_id);
        this.auth.setSessionData('filter_course_name', course.course_name);
        // Navigate to Course SEO page
        this.router.navigate(['/course/seo/list'], {
            queryParams: {
                course_id: course.course_id,
                course_name: course.course_name
            }
        });
    }

    navigateToFAQ(course: any) {
        console.log('Navigate to FAQ for course:', course);
        // Store course info for FAQ page
        this.auth.setSessionData('filter_course_id', course.course_id);
        this.auth.setSessionData('filter_course_name', course.course_name);
        // Navigate to Course FAQ page
        this.router.navigate(['/course/faq/list'], {
            queryParams: {
                course_id: course.course_id,
                course_name: course.course_name
            }
        });
    }

    searchList() {
        this.applyAllFilters();
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
        this.filteredRows = successData.IsSuccess ? successData.ResponseObject : [];
        this.courseDetailsListSearchData = successData.IsSuccess ? successData.ResponseObject : [];
        this.auth.setSessionData('course_detail_maximumCount', this.courseDetailsListSearchData.length);
        console.log(this.rows, 'rowa');
        this.applyAllFilters();
    }

    searchCourses() {
        this.applyAllFilters();
    }

    clearCourseSearch() {
        this.courseSearchText = '';
        this.applyAllFilters();
    }

    applyAllFilters() {
        let results = [...this.courseDetailsListSearchData];

        // Apply course search
        if (this.courseSearchText && this.courseSearchText.trim()) {
            const searchLower = this.courseSearchText.toLowerCase();
            results = results.filter(course =>
                course.course_name.toLowerCase().includes(searchLower) ||
                (course.description && course.description.toLowerCase().includes(searchLower)) ||
                (course.author && course.author.toLowerCase().includes(searchLower))
            );
        }

        // Apply category filter
        if (this.selectedCategory.length != 0) {
            results = results.filter((course) => {
                return this.selectedCategory.some((catId) => course.category_id.includes(catId));
            });
        }

        // Apply status filter
        if (this.selectedStatus.length != 0) {
            results = results.filter(course => this.selectedStatus.includes(course.status));
        }

        // Apply course type filter
        if (this.selectedCourseType && this.selectedCourseType != 'All') {
            results = results.filter((course) => {
                const courseType = this.selectedCourseType;
                return courseType === 'event' ? course[courseType] === '1' : course[courseType] === 'Y';
            });
        }

        this.filteredRows = results;
    }

    hasLinkedClasses(course: any): boolean {
        const count = this.getCourseClassCount(course);
        if (count === null) {
            return false;
        }
        return count > 0;
    }

    getCourseClassCountDisplay(course: any): number {
        const count = this.getCourseClassCount(course);
        return count !== null ? count : 0;
    }

    private getCourseClassCount(course: any): number | null {
        if (!course) {
            return null;
        }
        const potentialKeys = [
            'class_count',
            'classes_count',
            'classCount',
            'total_class_count',
            'total_classes',
            'totalclass_count',
            'class_total',
            'class_list'
        ];
        for (const key of potentialKeys) {
            const value = course[key];
            if (value === undefined || value === null || value === '') {
                continue;
            }
            if (Array.isArray(value)) {
                return value.length;
            }
            const numericValue = Number(value);
            if (!isNaN(numericValue)) {
                return numericValue;
            }
        }
        return null;
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
