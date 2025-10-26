import {Component, OnInit, ViewChild, TemplateRef, OnDestroy} from '@angular/core';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';
import {AuthService} from '../../shared/service/auth.service';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {UntypedFormGroup, Validators, UntypedFormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from '../../shared/service/category.service';
import {ValidationService} from '../../shared/service/validation.service';
import {CommonDataService} from '../../shared/service/common-data.service';
import {NavService} from '../../shared/service/nav.service';
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
import {SchoolselectionService} from '../../shared/service/schoolselection.service';

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
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})

export class DashboardComponent implements OnInit, OnDestroy {
  public doughnutData = doughnutData;
  public pieData = pieData;
  public allowDashboard: any;
  public overallList: any;
  public Chart: any;
  public monthwiseList: any;
  public orderList: any;
  public lineChartLabels: any;
  public accountForm: UntypedFormGroup;
  private modalRef: NgbModalRef;
  public closeResult: string;
  public hideSchool: boolean;
  public openmenu: boolean;

  // events
  // public chartClicked(e:any):void {
  // }
  //
  // public chartHovered(e:any):void {
  // }


  @ViewChild('content') modalContent: TemplateRef<any>;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<chartOptions1>;
  constructor(public auth: AuthService, public category: CategoryService, public select: SchoolselectionService, public navServices: NavService,
              public router: Router, config: NgbModalConfig, private modalService: NgbModal, public commondata: CommonDataService,
              private formBuilder: UntypedFormBuilder, private toastr: ToastrService, public validation: ValidationService, public route: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.allowDashboard = this.auth.getSessionData('go-default_password');
    if (this.allowDashboard == 1) {
      setTimeout(() => {
        this.showModal();
      }, 500);
    }
    this.getsection1List();
    this.getorderedList();
    this.getContentList();


    this.accountForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    Object.assign(this, {doughnutData, pieData});

  }
  changePassword() {
    if (this.accountForm.valid) {
      const data = {
        platform: 'web',
        role_id: this.auth.getSessionData('go-roleid'),
        user_id: this.auth.getSessionData('go-userid'),
        password: this.accountForm.controls.password.value,
        confirm_password: this.accountForm.controls.confirmPassword.value
      };
      this.category.changePassword(data).subscribe((successData) => {
            this.changePasswordSuccess(successData);
          },
          (error) => {
            this.changePasswordFailure(error);
          });
    } else {
      this.validation.validateAllFormFields(this.accountForm);
    }
  }

  changePasswordSuccess(successData) {

    if (successData.IsSuccess) {
      this.toastr.success(successData.ResponseObject.message, '');
      this.allowDashboard = this.auth.setSessionData('go-default_password', successData.ResponseObject.default_password);
      this.onSave();
    } else {

      this.toastr.error(successData.ErrorObject, '');
    }
  }

  changePasswordFailure(error) {
    console.log(error, 'error');
  }


  // doughnut 2
  public view = chartData.view;
  public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
  public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
  public doughnutChartGradient = chartData.doughnutChartGradient;
  public doughnutChartTooltip = chartData.doughnutChartTooltip;

  public chart5 = chartData.chart5;


  // lineChart
  public lineChartData = chartData.lineChartData;
  // public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // lineChart
  public smallLineChartData = chartData.smallLineChartData;
  public smallLineChartLabels = chartData.smallLineChartLabels;
  public smallLineChartOptions = chartData.smallLineChartOptions;
  public smallLineChartColors = chartData.smallLineChartColors;
  public smallLineChartLegend = chartData.smallLineChartLegend;
  public smallLineChartType = chartData.smallLineChartType;

  // lineChart
  public smallLine2ChartData = chartData.smallLine2ChartData;
  public smallLine2ChartLabels = chartData.smallLine2ChartLabels;
  public smallLine2ChartOptions = chartData.smallLine2ChartOptions;
  public smallLine2ChartColors = chartData.smallLine2ChartColors;
  public smallLine2ChartLegend = chartData.smallLine2ChartLegend;
  public smallLine2ChartType = chartData.smallLine2ChartType;

  // lineChart
  public smallLine3ChartData = chartData.smallLine3ChartData;
  public smallLine3ChartLabels = chartData.smallLine3ChartLabels;
  public smallLine3ChartOptions = chartData.smallLine3ChartOptions;
  public smallLine3ChartColors = chartData.smallLine3ChartColors;
  public smallLine3ChartLegend = chartData.smallLine3ChartLegend;
  public smallLine3ChartType = chartData.smallLine3ChartType;

  // lineChart
  public smallLine4ChartData = chartData.smallLine4ChartData;
  public smallLine4ChartLabels = chartData.smallLine4ChartLabels;
  public smallLine4ChartOptions = chartData.smallLine4ChartOptions;
  public smallLine4ChartColors = chartData.smallLine4ChartColors;
  public smallLine4ChartLegend = chartData.smallLine4ChartLegend;
  public smallLine4ChartType = chartData.smallLine4ChartType;


  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  ngOnInit() {
    this.commondata.showLoader(false);
    this.hideSchool = false;
    this.select.hideChangeSchool(this.hideSchool);
    this.openmenu = false;
    this.select.changeSideViewList(this.openmenu);
    this.navServices.collapseSidebar = false;
  }

  ngOnDestroy(): void {
    this.hideSchool = true;
    this.select.hideChangeSchool(this.hideSchool);
    this.openmenu = false;
    this.select.changeSideViewList(this.openmenu);
    this.navServices.collapseSidebar = false;
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
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.category.registerList(data).subscribe((successData) => {
          this.listSuccess(successData);
        },
        (error) => {
          this.listFailure(error);
        });


  }

  listSuccess(successData) {
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      this.overallList = successData.ResponseObject.over_all;
      this.monthwiseList = successData.ResponseObject.month_wise;
      let label = [];
      let teacher = [];
      let student = [];
      let schools = [];
      let contentcreator = [];
      for (let i = 0; i < this.monthwiseList.length; i++) {
        label.push(this.monthwiseList[i].monthname + '/' + this.monthwiseList[i].yearname);
        teacher.push(this.monthwiseList[i].teacher);
        schools.push(this.monthwiseList[i].schools);
        student.push(this.monthwiseList[i].student);
        contentcreator.push(this.monthwiseList[i].contentcreator);
      }

      // this.Chart = {
      //   type: 'Bar',
      //   data: {
      //     labels: label,
      //     series: [schools, teacher, student, contentcreator]
      //   },
      //   options: {
      //     height: 403,
      //     seriesBarDistance: 10,
      //     fullWidth: true,
      //
      //     axisX: {
      //       showGrid: false,
      //       offset: 100,
      //
      //       labelInterpolationFnc: function (value) {
      //         return value;
      //       }
      //     },
      //     axisY: {
      //       showGrid: true,
      //       onlyInteger: true,
      //       low: 0,
      //       offset: 20,
      //     },
      //   },
      //   events: {
      //     created: (data) => {
      //     }
      //   }
      // };
      this.chartOptions = {
        series: [
          {
            name: 'School',
            color: '#FFBC58',
            data: schools
          },
          {
            name: 'Teacher',
            color: '#13C9CA',
            data: teacher
          },
          {
            name: 'Student',
            color: '#8F008A',
            data: student
          },
          {
            name: 'Content Creator',
            color: '#DC3545',
            data: contentcreator
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
          categories: label
        },
        yaxis: {
          title: {
            // text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1,
          colors: ['#FFBC58', '#13C9CA', '#8F008A', '#DC3545']

        },
        tooltip: {
          y: {
            formatter: function(val) {
              return '' + val + '';
            }
          }
        },

      };

      // this.chartOptions = {
      //   series: [this.assessmentReportDetails.chartValues[0].Master, this.assessmentReportDetails.chartValues[0].Excellent, this.assessmentReportDetails.chartValues[0].Proficient, this.assessmentReportDetails.chartValues[0].Average, this.assessmentReportDetails.chartValues[0].belowAverage],
      //   chart: {
      //     width: 480,
      //     type: "pie"
      //   },
      //   labels: ["Master(90% and above)", "Excellent(80% - 89.99%)", "Proficient(70% - 79.99%)", "Average(50% - 69.99%)", "Below Average(less than 50%)"],
      //   responsive: [
      //     {
      //       breakpoint: 480,
      //       options: {
      //         chart: {
      //           width: 400
      //         },
      //         legend: {
      //           position: "bottom"
      //         }
      //       }
      //     }
      //   ]
      // };


      // this.toastr.success(successData.ResponseObject, 'Admin');
    } else {
      this.commondata.showLoader(false);
      // this.toastr.error(successData.ErrorObject, 'Admin');
    }
  }

  listFailure(error) {
    console.log(error, 'error');
    this.commondata.showLoader(false);
    this.toastr.error(error.ResponseObject, 'Admin');
  }

  // get order list
  getorderedList() {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.category.orderedList(data).subscribe((successData) => {
          this.orderSuccess(successData);
        })

  }
  orderSuccess(successData){
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
     let orderList = successData.ResponseObject;
      this.orderList = []
      orderList.forEach((item, index) => {
        if(index < 10){
          this.orderList.push(item);
        }
      })
    } else {
      this.commondata.showLoader(false);

    }
  }
  navigateinsitute(){
    this.route.navigate(['/School/list-School']);
  }
  // overall content
  getContentList() {
    this.commondata.showLoader(true);
    const data = {
      platform: 'web',
      role_id: this.auth.getSessionData('rista-roleid'),
      user_id: this.auth.getSessionData('rista-userid'),
    };
    this.category.contentList(data).subscribe((successData) => {
      this.contentSuccess(successData);
    })

  }
  contentSuccess(successData){
    if (successData.IsSuccess) {
      this.commondata.showLoader(false);
      let contentList = successData.ResponseObject;
      let month =[];
      let percent =[];
      for (let i = 0; i < contentList.length; i++) {
        month.push(contentList[i].monthname );
        percent.push(contentList[i].percentage );
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
        // title: {
        //   text: 'Product Trends by Month',
        //   align: 'left'
        // },
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
