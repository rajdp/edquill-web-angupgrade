import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import * as chartData from '../../shared/data/chart';
import {doughnutData, pieData} from '../../shared/data/chart';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from '../../shared/service/category.service';
import {ValidationService} from '../../shared/service/validation.service';
import {CommonDataService} from '../../shared/service/common-data.service';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexTitleSubtitle,
    ApexGrid,
    ApexXAxis,
    ApexFill,
    ApexTooltip
} from 'ng-apexcharts';
import {NewsubjectService} from '../../shared/service/newsubject.service';
import {TeacherService} from '../../shared/service/teacher.service';
import {CreatorService} from '../../shared/service/creator.service';
import {ContentService} from '../../shared/service/content.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PipesModule } from '../../shared/pipes/pipes.module';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
};
export type chartOptions1 = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NgbModalModule, NgApexchartsModule, PipesModule],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})
export class DashboardComponent implements OnInit {
    public doughnutData = doughnutData;
    public pieData = pieData;
    public allowDashboard: any;
    public accountForm: FormGroup;
    private modalRef: NgbModalRef;
    public closeResult: string;
    public overallList: any = {
        teachers: 0,
        students: 0,
        schools: 0,
        content_creators: 0,
        contentcreator: 0
    };
    public Chart: any;
    public monthwiseList: any;
    public orderList: any;
    public institutionName: any;
    public institutionClassess: any;
    public functionCalled = false;
    public schoolStatus: any;
    public permissionList: any;
    @ViewChild('content') modalContent: TemplateRef<any>;
    @ViewChild('chart') chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    public chartOptions1: Partial<chartOptions1>;
    public view = chartData.view;

    constructor(public auth: AuthService, public category: CategoryService,
                public router: Router, config: NgbModalConfig, private modalService: NgbModal, public commondata: CommonDataService,
                private formBuilder: FormBuilder, private toastr: ToastrService, public validation: ValidationService, public newSubject: NewsubjectService,
                private teacherService: TeacherService, private creatorService: CreatorService, private contentService: ContentService,
                private cdr: ChangeDetectorRef) {
        config.backdrop = 'static';
        config.keyboard = false;
        this.allowDashboard = this.auth.getSessionData('go-default_password');
        if (this.allowDashboard == 1) {
            setTimeout(() => {
                this.showModal();
            }, 500);
        }

        this.accountForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });

        Object.assign(this, {doughnutData, pieData});
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        
        // Get institution name from school details
        console.log('🏫 School Status:', this.schoolStatus);
        if (this.schoolStatus && this.schoolStatus.length > 0) {
            this.institutionName = this.schoolStatus[0].name || this.schoolStatus[0].school_name || 'N/A';
            console.log('🏫 Institution Name from session:', this.institutionName);
        }
        
        // Initialize chartOptions to prevent undefined errors
        this.initializeEmptyChart();

        if (this.schoolStatus.length != 0) {
            this.newSubject.schoolChange.subscribe(params => {
                if (params != '') {
                    if (this.router.url.includes('default')) {
                        console.log('Dashboard: School changed to', params);
                        this.init(params);
                    }
                } else {
                    const currentSchoolId = this.auth.getSessionData('school_id');
                    console.log('Dashboard: Initializing with school_id', currentSchoolId);
                    this.init(currentSchoolId);
                }
            });
        } else {
            // If schoolStatus is empty, try to initialize anyway
            const currentSchoolId = this.auth.getSessionData('school_id');
            if (currentSchoolId) {
                console.log('Dashboard: No school status, but found school_id', currentSchoolId);
                this.init(currentSchoolId);
            } else {
                console.warn('Dashboard: No school_id available in session');
            }
        }
    }

    ngOnInit() {
        this.commondata.showLoader(false);
        
        // Debug: Check if school_id exists on component load
        const schoolId = this.auth.getSessionData('school_id');
        const userId = this.auth.getUserId();
        const roleId = this.auth.getRoleId();
        
        console.log('Dashboard ngOnInit - Session Data:', {
            school_id: schoolId,
            user_id: userId,
            role_id: roleId,
            schoolStatus: this.schoolStatus
        });
        
        // If school status is empty/null and we don't have school_id, show warning
        if (!schoolId) {
            console.warn('⚠️ Dashboard Warning: school_id not found in session storage');
            console.log('Available localStorage keys:', Object.keys(localStorage));
            this.toastr.warning('School information not loaded. Some data may not display correctly.', 'Dashboard');
        }
    }

    init(res) {
      if (this.auth.getRoleId() == '2'){
        this.permissionList = JSON.parse(this.auth.getSessionData('rista_data1'));
        this.permissionList.allow_dashboard == '1' ? this.serviceCalled() :
            this.router.navigate(['/class/list-class']);
      }else {
        this.serviceCalled();
      }
    }

    serviceCalled(){
      this.getsection1List();
      this.getorderedList();
      this.getContentList();
      this.getTeacherCount();
      this.getContentCreatorCount();
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


    open(content) {
        this.modalService.open(content);
    }

    onSave() {
        this.modalRef.close();
    }

    // dashboard data
    getsection1List() {
        this.commondata.showLoader(true);
        
        // Ensure we have a valid school_id
        const schoolId = this.auth.getSessionData('school_id');
        const roleId = this.auth.getRoleId();
        const userId = this.auth.getUserId();
        
        // Debug logging to verify data
        console.log('Dashboard API Request:', {
            platform: 'web',
            role_id: roleId,
            user_id: userId,
            school_id: schoolId
        });
        
        // Validate required data
        if (!schoolId) {
            console.error('Dashboard Error: school_id is missing from session');
            this.toastr.error('School information not found. Please log in again.', 'Dashboard');
            this.commondata.showLoader(false);
            this.overallList = { teachers: 0, students: 0, schools: 0, content_creators: 0 };
            this.initializeEmptyChart();
            return;
        }
        
        if (!userId || !roleId) {
            console.error('Dashboard Error: user_id or role_id is missing');
            this.toastr.error('Authentication data missing. Please log in again.', 'Dashboard');
            this.commondata.showLoader(false);
            this.overallList = { teachers: 0, students: 0, schools: 0, content_creators: 0 };
            this.initializeEmptyChart();
            return;
        }
        
        const data = {
            platform: 'web',
            role_id: roleId,
            user_id: userId,
            school_id: schoolId
        };
        
        this.category.registerList(data).subscribe((successData) => {
                console.log('Dashboard API Response:', successData);
                this.listSuccess(successData);
            },
            (error) => {
                console.error('Dashboard API Error:', error);
                this.listFailure(error);
            });
    }

    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            
            // Set functionCalled to true so dashboard displays
            this.functionCalled = true;
            
            // DEBUG: Log the actual ResponseObject structure
            console.log('🔍 Full API Response:', successData);
            console.log('🔍 ResponseObject keys:', successData.ResponseObject ? Object.keys(successData.ResponseObject) : 'null');
            
            // Extract data based on ACTUAL API structure
            const schoolCount = successData.ResponseObject?.school_count?.[0]?.count || 0;
            const dashboardCount = successData.ResponseObject?.dashboard_count?.[0] || {};
            this.monthwiseList = successData.ResponseObject?.overall || [];
            const allSchools = successData.ResponseObject?.all_schools || [];
            
            console.log('📊 Extracted data:', {
                schoolCount,
                dashboardCount,
                monthwiseListLength: this.monthwiseList.length,
                allSchoolsLength: allSchools.length
            });
            
            // Update overallList with student data (preserve existing teacher/content creator counts)
            // Note: API only returns student counts, not separate teacher/school/contentcreator
            this.overallList.students = schoolCount;
            this.overallList.schools = 0;  // Not provided by this API
            // teachers and contentcreator are updated by separate API calls
            
            console.log('📊 Built overallList:', this.overallList);
            
            // Check if we have month-wise data
            if (!this.monthwiseList || this.monthwiseList.length === 0) {
                console.warn('Dashboard: No month-wise data in "overall" array');
                this.initializeEmptyChart();
                return;
            }
            
            console.log('📊 Month-wise data available:', this.monthwiseList.length, 'months');
            
            const label = [];
            const teacher = [];
            const student = [];
            const schools = [];
            const contentcreator = [];
            
            // Sort month data chronologically
            const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const sortedMonths = [...this.monthwiseList].sort((a, b) => {
                return monthOrder.indexOf(a.monthname) - monthOrder.indexOf(b.monthname);
            });
            
            console.log('📅 Processing', sortedMonths.length, 'months of data');
            
            // Process month-wise data based on ACTUAL API structure
            // API returns: {monthname: "Apr", student_count: "14"}
            for (let i = 0; i < sortedMonths.length; i++) {
                const monthData = sortedMonths[i];
                
                // Create month label
                const monthLabel = monthData.monthname + (monthData.yearname ? '/' + monthData.yearname : '');
                label.push(monthLabel);
                
                // Extract student count from the actual field name
                const studentCount = parseInt(monthData.student_count || monthData.count || 0);
                student.push(studentCount);
                
                // API doesn't provide separate counts for these, so set to 0
                teacher.push(0);
                schools.push(0);
                contentcreator.push(0);
                
                console.log(`  ${monthLabel}: ${studentCount} students`);
            }
            
            console.log('📊 Chart data processed:', {
                labels: label,
                students: student,
                totalStudents: student.reduce((a, b) => a + b, 0)
            });
            // Only include series with actual data to avoid empty bars
            const series = [];
            
            if (student.some(val => val > 0)) {
                series.push({
                    name: 'Students',
                    color: '#8F008A',  // Purple
                    data: student
                });
            }
            
            if (teacher.some(val => val > 0)) {
                series.push({
                    name: 'Teachers',
                    color: '#13C9CA',  // Cyan
                    data: teacher
                });
            }
            
            if (schools.some(val => val > 0)) {
                series.push({
                    name: 'Schools',
                    color: '#FFBC58',  // Orange
                    data: schools
                });
            }
            
            if (contentcreator.some(val => val > 0)) {
                series.push({
                    name: 'Content Creators',
                    color: '#DC3545',  // Red
                    data: contentcreator
                });
            }
            
            console.log('📊 Chart series created:', series.length, 'series with data');
            console.log('📊 Series data:', JSON.stringify(series, null, 2));
            
            // If no series have data, show at least the student series with zeros
            if (series.length === 0) {
                series.push({
                    name: 'Students',
                    color: '#8F008A',
                    data: student  // Will be all zeros
                });
                console.log('📊 No data found, showing empty student series');
            }
            
            console.log('📊 Creating chart with labels:', label);
            console.log('📊 Label count:', label.length, 'Data points:', series[0]?.data?.length);
            
            this.chartOptions = {
                series: series,
                chart: {
                    type: 'bar',
                    height: 403,
                    toolbar: {
                        tools: {
                            download: false
                        }
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                        // endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: label,
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: 'Count'
                    },
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    opacity: 1,
                    colors: series.map(s => s.color)  // Dynamic colors based on actual series
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return '' + val + '';
                        }
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                }
            };
            
            console.log('📊 chartOptions created:', {
                hasSeries: !!this.chartOptions.series,
                seriesLength: this.chartOptions.series?.length,
                hasCategories: !!this.chartOptions.xaxis?.categories,
                categoryCount: this.chartOptions.xaxis?.categories?.length
            });
            
            // Trigger change detection to ensure chart renders
            setTimeout(() => {
                this.cdr.detectChanges();
                console.log('📊 Change detection triggered for chart');
            }, 0);
            
        } else {
            this.commondata.showLoader(false);
        }
    }

    listFailure(error) {
        console.log(error, 'error');
        this.commondata.showLoader(false);
        
        // Set functionCalled to true even on error so dashboard displays
        this.functionCalled = true;
        
        // Initialize empty chart and counts on error
        this.overallList = { teachers: 0, students: 0, schools: 0, content_creators: 0 };
        this.initializeEmptyChart();
        
        // Show error message if available
        if (error?.ResponseObject) {
            this.toastr.error(error.ResponseObject, 'Admin');
        } else {
            this.toastr.error('Unable to load dashboard data', 'Dashboard');
        }
    }

    /**
     * Initialize empty chart when no data is available
     */
    initializeEmptyChart() {
        const currentDate = new Date();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const labels = [];
        
        // Generate last 6 months labels
        for (let i = 5; i >= 0; i--) {
            const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
            labels.push(monthNames[d.getMonth()] + '/' + d.getFullYear());
        }
        
        this.chartOptions = {
            series: [
                {
                    name: 'Students',
                    color: '#8F008A',  // Purple
                    data: [0, 0, 0, 0, 0, 0]
                }
            ],
            chart: {
                type: 'bar',
                height: 403,
                toolbar: {
                    tools: {
                        download: false
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: labels,
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                title: {
                    text: 'Count'
                },
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1,
                colors: ['#8F008A']  // Purple for students
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return '' + val + '';
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            }
        };
    }

    // get order list
    getorderedList() {
        this.commondata.showLoader(true);
        
        const schoolId = this.auth.getSessionData('school_id');
        
        // Skip if no school_id
        if (!schoolId) {
            console.warn('Dashboard: Skipping order list - no school_id');
            this.commondata.showLoader(false);
            return;
        }
        
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: schoolId
        };
        
        console.log('Order List API Request:', data);
        
        this.category.orderedList(data).subscribe((successData) => {
            console.log('Order List API Response:', successData);
            this.orderSuccess(successData);
        }, (error) => {
            console.error('Order List API Error:', error);
            this.commondata.showLoader(false);
        });
    }

    orderSuccess(successData) {
        console.log('📋 Institution Status API Response:', successData);
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            const orderList = successData.ResponseObject;
            console.log('📋 orderList:', orderList);
            console.log('📋 orderList[0]:', orderList[0]);
            
            if (orderList && orderList.length > 0) {
                console.log('📋 ALL properties in orderList[0]:', Object.keys(orderList[0]));
                console.log('📋 orderList[0] FULL DATA:', JSON.stringify(orderList[0], null, 2));
                
                // Institution name should come from school table via session (already set in constructor)
                // Don't override it from orderList as it might not have the name
                if (!this.institutionName && orderList[0].name) {
                    this.institutionName = orderList[0].name;
                }
                console.log('📋 institutionName:', this.institutionName);
                console.log('📋 class_count type:', typeof orderList[0].class_count);
                console.log('📋 class_count value:', orderList[0].class_count);
                console.log('📋 class_count is array?', Array.isArray(orderList[0].class_count));
                
                // Fix: Ensure institutionClassess is an array
                if (Array.isArray(orderList[0].class_count)) {
                    this.institutionClassess = orderList[0].class_count;
                } else if (typeof orderList[0].class_count === 'object' && orderList[0].class_count !== null) {
                    // If it's an object, wrap it in array
                    this.institutionClassess = [orderList[0].class_count];
                } else {
                    // If it's a primitive (number/string), create array with data from orderList[0]
                    // Try different property name variations
                    const item = orderList[0];
                    this.institutionClassess = [{
                        totalclass_count: item.class_count || item.total_class_count || item.totalclass_count || 0,
                        monthclass_count: item.month_class_count || item.monthclass_count || item.current_month_classes || 0,
                        totaledited_class: item.edited_class || item.total_edited_class || item.totaledited_class || item.edit_class_count || 0,
                        monthedit_class: item.month_edit_class || item.monthedit_class || item.current_month_edit_classes || item.month_edited_class || 0
                    }];
                }
                
                console.log('📋 Final institutionClassess:', this.institutionClassess);
                
                this.orderList = [];
                orderList.forEach((item, index) => {
                    if (index < 10) {
                        this.orderList.push(item);
                    }
                });
            } else {
                console.error('📋 orderList is empty or undefined');
            }
            this.functionCalled = true;
        } else {
            this.commondata.showLoader(false);
            console.error('📋 Institution Status API returned IsSuccess: false');
        }
    }

    // overall content
    getContentList() {
        this.commondata.showLoader(true);
        
        const schoolId = this.auth.getSessionData('school_id');
        
        // Skip if no school_id
        if (!schoolId) {
            console.warn('Dashboard: Skipping content list - no school_id');
            this.commondata.showLoader(false);
            return;
        }
        
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: schoolId
        };
        
        console.log('Content List API Request:', data);
        
        this.category.contentList(data).subscribe((successData) => {
            console.log('Content List API Response:', successData);
            this.contentSuccess(successData);
        }, (error) => {
            console.error('Content List API Error:', error);
            this.commondata.showLoader(false);
        });
    }

    /**
     * Get teacher count for dashboard
     */
    getTeacherCount() {
        const schoolId = this.auth.getSessionData('school_id');
        
        if (!schoolId) {
            console.warn('Dashboard: Skipping teacher count - no school_id');
            return;
        }
        
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),  // Current user's role for auth
            user_id: this.auth.getUserId(),
            school_id: schoolId,
            status: '1',  // Active users only (status=1)
            filter_role: '4',  // Filter by Teacher role_id (4)
            limit: 9999,  // Get all to count
            offset: 0
        };
        
        console.log('👨‍🏫 Fetching teacher count...', data);
        
        this.teacherService.teacherList(data).subscribe((successData: any) => {
            console.log('👨‍🏫 Teacher FULL Response:', successData);
            
            if (successData?.IsSuccess) {
                // Check different possible response structures
                let teacherCount = 0;
                
                if (successData.ResponseObject) {
                    console.log('👨‍🏫 ResponseObject:', successData.ResponseObject);
                    console.log('👨‍🏫 ResponseObject type:', typeof successData.ResponseObject);
                    console.log('👨‍🏫 Is array?', Array.isArray(successData.ResponseObject));
                    
                    if (successData.ResponseObject.total) {
                        teacherCount = parseInt(successData.ResponseObject.total);
                        console.log('👨‍🏫 Using .total:', teacherCount);
                    } else if (Array.isArray(successData.ResponseObject)) {
                        teacherCount = successData.ResponseObject.length;
                        console.log('👨‍🏫 Using array length:', teacherCount);
                    } else if (successData.ResponseObject.count) {
                        teacherCount = parseInt(successData.ResponseObject.count);
                        console.log('👨‍🏫 Using .count:', teacherCount);
                    }
                }
                
                console.log('👨‍🏫 Final Teacher count:', teacherCount);
                
                // Update overallList with teacher count
                console.log('👨‍🏫 Before update - overallList exists?', !!this.overallList);
                console.log('👨‍🏫 Before update - overallList:', this.overallList);
                
                if (this.overallList) {
                    this.overallList.teachers = teacherCount;
                    console.log('👨‍🏫 Updated overallList.teachers to:', this.overallList.teachers);
                    console.log('👨‍🏫 Current overallList:', this.overallList);
                    
                    // Trigger Angular change detection
                    this.cdr.detectChanges();
                    console.log('👨‍🏫 Change detection triggered');
                } else {
                    console.error('👨‍🏫 overallList is null/undefined!');
                }
            } else {
                console.error('👨‍🏫 API returned IsSuccess: false');
            }
        }, (error) => {
            console.error('👨‍🏫 Teacher API error:', error);
        });
    }
    
    /**
     * Get content creator count for dashboard
     * Role IDs: 3=ContentCreator, 4=Teacher, 5=Student
     */
    getContentCreatorCount() {
        const schoolId = this.auth.getSessionData('school_id');
        
        if (!schoolId) {
            console.warn('Dashboard: Skipping content creator count - no school_id');
            return;
        }
        
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),  // Current user's role for auth
            user_id: this.auth.getUserId(),
            school_id: schoolId,
            status: '1',  // Active users only (status=1)
            filter_role: '3',  // Filter by Content Creator role_id (3)
            limit: 9999,  // Get all to count
            offset: 0
        };
        
        console.log('✍️ Fetching content creator count...', data);
        
        // Use ContentService.contentList which calls 'contentcreator/list' endpoint
        this.contentService.contentList(data).subscribe((successData: any) => {
            console.log('✍️ Content Creator FULL Response:', successData);
            
            if (successData?.IsSuccess) {
                // Check different possible response structures
                let creatorCount = 0;
                
                if (successData.ResponseObject) {
                    console.log('✍️ ResponseObject:', successData.ResponseObject);
                    console.log('✍️ ResponseObject type:', typeof successData.ResponseObject);
                    console.log('✍️ Is array?', Array.isArray(successData.ResponseObject));
                    
                    if (successData.ResponseObject.total) {
                        creatorCount = parseInt(successData.ResponseObject.total);
                        console.log('✍️ Using .total:', creatorCount);
                    } else if (Array.isArray(successData.ResponseObject)) {
                        creatorCount = successData.ResponseObject.length;
                        console.log('✍️ Using array length:', creatorCount);
                    } else if (successData.ResponseObject.count) {
                        creatorCount = parseInt(successData.ResponseObject.count);
                        console.log('✍️ Using .count:', creatorCount);
                    }
                }
                
                console.log('✍️ Final Content creator count:', creatorCount);
                
                // Update overallList with content creator count
                console.log('✍️ Before update - overallList exists?', !!this.overallList);
                console.log('✍️ Before update - overallList:', this.overallList);
                
                if (this.overallList) {
                    this.overallList.contentcreator = creatorCount;
                    this.overallList.content_creators = creatorCount;
                    console.log('✍️ Updated overallList.contentcreator to:', this.overallList.contentcreator);
                    console.log('✍️ Current overallList:', this.overallList);
                    
                    // Trigger Angular change detection
                    this.cdr.detectChanges();
                    console.log('✍️ Change detection triggered');
                } else {
                    console.error('✍️ overallList is null/undefined!');
                }
            } else {
                console.error('✍️ API returned IsSuccess: false');
            }
        }, (error) => {
            console.error('✍️ Content creator API error:', error);
        });
    }

    contentSuccess(successData) {
        if (successData.IsSuccess) {
            this.commondata.showLoader(false);
            const contentList = successData.ResponseObject;
            const month = [];
            const percent = [];
            for (let i = 0; i < contentList.length; i++) {
                month.push(contentList[i].monthname);
                percent.push(contentList[i].percentage);
            }
            // monthname: "Jan", content: "3", percentage: "1%"}
            this.chartOptions1 = {
                series: [
                    {
                        name: 'content',
                        data: percent,
                        color: '#8F008A',

                    }
                ],
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        tools: {
                            download: false
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: month
                }
            };

        } else {
            this.commondata.showLoader(false);

        }
    }
}
