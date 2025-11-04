import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../../shared/service/report.service";
import * as i5 from "../../../shared/service/auth.service";
import * as i6 from "ngx-toastr";
import * as i7 from "angular2-smart-table";
import * as i8 from "@ng-select/ng-select";
import * as i9 from "ng-apexcharts";
function StudentGradeSummaryComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 7)(2, "span", 8);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Assessment List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7)(6, "ng-select", 16);
    i0.ɵɵlistener("change", function StudentGradeSummaryComponent_div_13_Template_ng_select_change_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentGradeReport()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r1.assessmentDetails);
} }
function StudentGradeSummaryComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 7)(2, "span", 8);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Student List");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7)(6, "ng-select", 17);
    i0.ɵɵlistener("change", function StudentGradeSummaryComponent_div_14_Template_ng_select_change_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.studentGradeReport()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r1.studentDetails);
} }
function StudentGradeSummaryComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "button", 19);
    i0.ɵɵlistener("click", function StudentGradeSummaryComponent_div_17_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assessmentPrint()); });
    i0.ɵɵtext(2, "print");
    i0.ɵɵelementEnd()();
} }
function StudentGradeSummaryComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 2)(2, "div", 21)(3, "div", 5)(4, "div", 2)(5, "h3");
    i0.ɵɵtext(6, "Students in Performance Bands (%)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 22);
    i0.ɵɵelement(8, "apx-chart", 23);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(9, "div", 24)(10, "div", 21)(11, "div", 5)(12, "div", 25)(13, "h3");
    i0.ɵɵtext(14, "Assessment Statistics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 26)(16, "button", 27);
    i0.ɵɵlistener("click", function StudentGradeSummaryComponent_div_18_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadExcelData()); });
    i0.ɵɵtext(17, "Download CSV");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 28)(19, "div", 29)(20, "div", 30)(21, "angular2-smart-table", 31);
    i0.ɵɵlistener("userRowSelect", function StudentGradeSummaryComponent_div_18_Template_angular2_smart_table_userRowSelect_21_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewDetail($event)); });
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("series", ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions.chart)("dataLabels", ctx_r1.chartOptions.dataLabels)("plotOptions", ctx_r1.chartOptions.plotOptions)("responsive", ctx_r1.chartOptions.responsive)("xaxis", ctx_r1.chartOptions.xaxis)("legend", ctx_r1.chartOptions.legend)("fill", ctx_r1.chartOptions.fill);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("settings", ctx_r1.settings)("source", ctx_r1.listData);
} }
function StudentGradeSummaryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 2)(2, "button", 33);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
export class StudentGradeSummaryComponent {
    constructor(commondata, firstcaps, formBuilder, report, auth, toastr) {
        this.commondata = commondata;
        this.firstcaps = firstcaps;
        this.formBuilder = formBuilder;
        this.report = report;
        this.auth = auth;
        this.toastr = toastr;
        this.assessmentShow = false;
        this.assessmentReportShow = false;
        this.message = 'Please Select one Class List.';
        this.settings = {
            hideSubHeader: false,
            actions: false,
            columns: {
                student_name: {
                    title: 'Student Name',
                },
                student_average_score: {
                    title: 'Avg. Student Score(%)',
                },
                assigned: {
                    title: 'Assigned',
                },
                graded: {
                    title: 'Graded'
                },
                absent: {
                    title: 'Absent'
                },
                min_score: {
                    title: 'Min. Score'
                },
                max_score: {
                    title: 'Max. Score'
                },
                average_score: {
                    title: 'Avg. Score'
                }
            }
        };
        // this.selectTab = 'student';
        this.studentForm = this.formBuilder.group({
            class: null,
            student: '',
            assessment: ''
        });
    }
    ngOnInit() {
        this.classReport();
    }
    // selectTabFunction(type){
    //   this.selectTab = type;
    // }
    viewDetail(event) { }
    classReport() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id')
        };
        this.report.classReport(data).subscribe((successData) => {
            this.classReportSuccess(successData);
        }, (error) => {
            this.classReportFailure(error);
        });
    }
    classReportSuccess(successData) {
        if (successData.IsSuccess) {
            this.classDetails = successData.ResponseObject;
        }
    }
    classReportFailure(error) {
    }
    assessmentReport() {
        if (this.studentForm.get('class').value != null) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.studentForm.get('class').value
            };
            this.report.assessmentReport(data).subscribe((successData) => {
                this.assessmentReportSuccess(successData);
            }, (error) => {
                this.assessmentReportFailure(error);
            });
        }
        else {
            this.message = 'Class should not be empty';
            this.assessmentShow = false;
            this.assessmentReportShow = false;
        }
    }
    assessmentReportSuccess(successData) {
        if (successData.IsSuccess) {
            this.assessmentDetails = successData.ResponseObject;
            const selected = this.assessmentDetails.map(item => item.content_id);
            const value = this.studentForm.get('assessment').patchValue(selected);
            this.studentReport();
        }
    }
    assessmentReportFailure(error) {
    }
    studentReport() {
        if (this.studentForm.get('class').value != null) {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.studentForm.get('class').value
            };
            this.report.studentDetailReport(data).subscribe((successData) => {
                this.studentReportSuccess(successData);
            }, (error) => {
                this.studentReportFailure(error);
            });
        }
        else {
            this.message = 'Class should not be empty';
            this.assessmentShow = false;
            this.assessmentReportShow = false;
        }
    }
    studentReportSuccess(successData) {
        if (successData.IsSuccess) {
            this.studentDetails = successData.ResponseObject;
            const selected = this.studentDetails.map(item => item.student_id);
            const value = this.studentForm.get('student').patchValue(selected);
            this.assessmentShow = true;
            this.studentGradeReport();
        }
    }
    studentReportFailure(error) {
    }
    studentGradeReport() {
        if (this.studentForm.get('student').value != '') {
            const data = {
                platform: 'web',
                role_id: this.auth.getRoleId(),
                user_id: this.auth.getUserId(),
                school_id: this.auth.getSessionData('school_id'),
                class_id: this.studentForm.get('class').value,
                content_id: this.studentForm.get('assessment').value,
                student_id: this.studentForm.get('student').value
            };
            this.report.studentGradeSummaryReport(data).subscribe((successData) => {
                this.studentGradeReportSuccess(successData);
            }, (error) => {
                this.studentGradeReportFailure(error);
            });
        }
        else {
            this.message = 'Please check your student list is empty';
            this.assessmentReportShow = false;
        }
    }
    studentGradeReportSuccess(successData) {
        if (successData.IsSuccess) {
            this.chartOptions = {
                series: [
                    {
                        name: "Master(90% and above)",
                        data: []
                    },
                    {
                        name: "Excellent(80% - 89.99%)",
                        data: []
                    },
                    {
                        name: "Proficient(70% - 79.99%)",
                        data: []
                    },
                    {
                        name: "Average(50% - 69.99%)",
                        data: []
                    },
                    {
                        name: "Below Average(less than 50%)",
                        data: []
                    }
                ],
                chart: {
                    type: "bar",
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: "bottom",
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }
                ],
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                xaxis: {
                    type: "category",
                    categories: []
                },
                legend: {
                    position: "right",
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            };
            if (successData.ResponseObject != 'No Records found') {
                const details = successData.ResponseObject;
                this.studentGradeDetails = details.chart;
                this.listData = details.studentList;
                this.assessmentReportShow = true;
                const categoriesList = [];
                for (let i = 0; i < this.studentGradeDetails.length; i++) {
                    let datalist = this.studentGradeDetails[i].data;
                    let dataBelow = datalist.filter(function (val) {
                        return Number(val) <= 50;
                    });
                    let dataAverage = datalist.filter(function (val) {
                        return Number(val) >= 50 && Number(val) <= 70;
                    });
                    let dataProficient = datalist.filter(function (val) {
                        return Number(val) >= 70 && Number(val) <= 80;
                    });
                    let dataExcellent = datalist.filter(function (val) {
                        return Number(val) >= 80 && Number(val) <= 90;
                    });
                    let dataMaster = datalist.filter(function (val) {
                        return Number(val) >= 90;
                    });
                    this.chartOptions.xaxis.categories.push(this.studentGradeDetails[i].name == null ? '' : this.studentGradeDetails[i].name);
                    dataMaster.forEach(val => {
                        this.chartOptions.series[0]['data'].push(val + '%');
                    });
                    dataExcellent.forEach(val => {
                        this.chartOptions.series[1]['data'].push(val + '%');
                    });
                    dataProficient.forEach(val => {
                        this.chartOptions.series[2]['data'].push(val + '%');
                    });
                    dataAverage.forEach(val => {
                        this.chartOptions.series[3]['data'].push(val + '%');
                    });
                    dataBelow.forEach(val => {
                        this.chartOptions.series[4]['data'].push(val + '%');
                    });
                }
            }
            else {
                this.assessmentReportShow = false;
                this.message = 'No Records found';
            }
        }
    }
    studentGradeReportFailure(error) {
    }
    downloadExcelData() {
        // let fileName = `EnergyData_${this.downloadDate}.csv`;
        // let fileName = `transaction_${this.form.controls.fromDate.value}-${this.form.controls.toDate.value}.csv`;
        let requiredColumnNames = [
            'Student Name',
            'Avg. Student Score(%)',
            'Assigned',
            'Graded',
            'Absent',
            'Min. Score',
            'Max. Score',
            'Avg. Score'
        ];
        let columnNames = requiredColumnNames;
        let header = columnNames.join(',');
        this.csv = header;
        this.csv += '\r\n';
        for (let i = 0; i < this.listData.length; i++) {
            this.csv += [
                this.listData[i].student_name,
                this.listData[i].average_student_score,
                this.listData[i].assigned,
                this.listData[i].graded,
                this.listData[i].absent,
                this.listData[i].min_score,
                this.listData[i].max_score,
                this.listData[i].average_score,
            ].join(',');
            this.csv += '\r\n';
        }
        var blob = new Blob([this.csv], { type: 'text/csv;charset=utf-8;' });
        var link = document.createElement('a');
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'student-grade-summary-Report.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    assessmentPrint() {
        let printContents, popupWin;
        printContents = document.getElementById('assessmentPrint').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          <style>
          @media print {    
          body{
          font-family: 'Roboto', sans-serif;
          }
          .card-body{
          display: none;
          }
          .form-group {
           display: none;
          }
          .group-btn {
           display: none;
          }
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
        popupWin.document.close();
    }
    static { this.ɵfac = function StudentGradeSummaryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentGradeSummaryComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.TitleCasePipe), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.ReportService), i0.ɵɵdirectiveInject(i5.AuthService), i0.ɵɵdirectiveInject(i6.ToastrService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentGradeSummaryComponent, selectors: [["app-student-grade-summary"]], decls: 20, vars: 8, consts: [["id", "assessmentPrint", 1, "container-fluid"], [1, "row", "mt-3"], [1, "col-12"], [1, "card-body", "tab2-card"], [1, "needs-validation", "user-add", 3, "formGroup"], [1, "row"], [1, "form-group", "col-3"], [1, "col-xl-12", "col-md-12"], [2, "visibility", "hidden"], ["bindLabel", "class_name", "bindValue", "class_id", "formControlName", "class", "placeholder", "Class List", 3, "change", "items"], ["class", "form-group col-3", 4, "ngIf"], [3, "ngClass"], [1, "row", "group-btn", "mt-3"], ["class", "col-12 text-right", 4, "ngIf"], ["class", "row d-flex justify-content-between mt-3", 4, "ngIf"], ["class", "row d-flex justify-content-center list-card mt-3", 4, "ngIf"], ["bindLabel", "content_name", "bindValue", "content_id", "formControlName", "assessment", "placeholder", "Please Select", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], ["bindLabel", "student_name", "bindValue", "student_id", "formControlName", "student", "placeholder", "Please Select", "typeToSearchText", "", "multiple", "true", 3, "change", "items"], [1, "col-12", "text-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row", "d-flex", "justify-content-between", "mt-3"], [1, "card", "p-3"], ["id", "chart"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "legend", "fill"], [1, "col-12", "mt-3"], [1, "col-6"], [1, "col-6", "text-right"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "mt-2"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "userRowSelect", "settings", "source"], [1, "row", "d-flex", "justify-content-center", "list-card", "mt-3"], [1, "nodataList"]], template: function StudentGradeSummaryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7)(8, "span", 8);
            i0.ɵɵtext(9, "*");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Class List");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7)(12, "ng-select", 9);
            i0.ɵɵlistener("change", function StudentGradeSummaryComponent_Template_ng_select_change_12_listener() { ctx.assessmentReport(); return ctx.studentReport(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(13, StudentGradeSummaryComponent_div_13_Template, 7, 1, "div", 10)(14, StudentGradeSummaryComponent_div_14_Template, 7, 1, "div", 10);
            i0.ɵɵelementStart(15, "div", 11)(16, "div", 12);
            i0.ɵɵtemplate(17, StudentGradeSummaryComponent_div_17_Template, 3, 0, "div", 13);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(18, StudentGradeSummaryComponent_div_18_Template, 22, 10, "div", 14)(19, StudentGradeSummaryComponent_div_19_Template, 4, 1, "div", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.studentForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("items", ctx.classDetails);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.assessmentShow);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.assessmentShow);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.assessmentShow == true ? "col-3" : "col-9");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.assessmentReportShow);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.assessmentReportShow);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.assessmentReportShow);
        } }, dependencies: [i2.NgClass, i2.NgIf, i7.Angular2SmartTableComponent, i3.ɵNgNoValidate, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, i8.NgSelectComponent, i9.ChartComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentGradeSummaryComponent, [{
        type: Component,
        args: [{ selector: 'app-student-grade-summary', template: "<div class=\"container-fluid\" id=\"assessmentPrint\">\n    <div class=\"row mt-3\">\n        <div class=\"col-12\">\n            <div class=\"card-body tab2-card\">\n                <form [formGroup]=\"studentForm\" class=\"needs-validation user-add\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-3\">\n                            <label class=\"col-xl-12 col-md-12\"><span style=\"visibility: hidden\">*</span>\n                                Class List</label>\n                            <div class=\"col-xl-12 col-md-12\">\n                                <ng-select (change)=\"assessmentReport(); studentReport()\"\n                                           [items]=\"classDetails\"\n                                           bindLabel=\"class_name\"\n                                           bindValue=\"class_id\"\n                                           formControlName=\"class\"\n                                           placeholder=\"Class List\">\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-3\" *ngIf=\"assessmentShow\">\n                            <label class=\"col-xl-12 col-md-12\"><span style=\"visibility: hidden\">*</span>\n                                Assessment List</label>\n                            <div class=\"col-xl-12 col-md-12\">\n                                <ng-select (change)=\"studentGradeReport()\"\n                                           [items]=\"assessmentDetails\"\n                                           bindLabel=\"content_name\"\n                                           bindValue=\"content_id\"\n                                           formControlName=\"assessment\"\n                                           placeholder=\"Please Select\"\n                                           typeToSearchText=\"\"\n                                           multiple=\"true\">\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-3\" *ngIf=\"assessmentShow\">\n                            <label class=\"col-xl-12 col-md-12\"><span style=\"visibility: hidden\">*</span>\n                                Student List</label>\n                            <div class=\"col-xl-12 col-md-12\">\n                                <ng-select (change)=\"studentGradeReport()\"\n                                           [items]=\"studentDetails\"\n                                           bindLabel=\"student_name\"\n                                           bindValue=\"student_id\"\n                                           formControlName=\"student\"\n                                           placeholder=\"Please Select\"\n                                           typeToSearchText=\"\"\n                                           multiple=\"true\">\n                                </ng-select>\n                            </div>\n                        </div>\n                        <div [ngClass]=\"assessmentShow == true ? 'col-3' : 'col-9'\">\n                            <div class=\"row group-btn mt-3\">\n                                <div class=\"col-12 text-right\" *ngIf=\"assessmentReportShow\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"assessmentPrint()\">print</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-between mt-3\" *ngIf=\"assessmentReportShow\">\n        <div class=\"col-12\">\n            <div class=\"card p-3\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h3>Students in Performance Bands (%)</h3>\n                        <div id=\"chart\">\n                            <apx-chart\n                                    [series]=\"chartOptions.series\"\n                                    [chart]=\"chartOptions.chart\"\n                                    [dataLabels]=\"chartOptions.dataLabels\"\n                                    [plotOptions]=\"chartOptions.plotOptions\"\n                                    [responsive]=\"chartOptions.responsive\"\n                                    [xaxis]=\"chartOptions.xaxis\"\n                                    [legend]=\"chartOptions.legend\"\n                                    [fill]=\"chartOptions.fill\"\n                            ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 mt-3\">\n            <div class=\"card p-3\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h3>Assessment Statistics</h3>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadExcelData()\">Download CSV</button>\n                    </div>\n                    <div class=\"col-12 mt-2\">\n                        <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                            <div class=\"table-responsive\">\n                                <angular2-smart-table [settings]=\"settings\" [source]=\"listData\" (userRowSelect)=\"viewDetail($event)\"></angular2-smart-table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row d-flex justify-content-center list-card mt-3\" *ngIf=\"!assessmentReportShow\">\n        <div class=\"col-12\">\n            <button class=\"nodataList\">{{message}}</button>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.TitleCasePipe }, { type: i3.FormBuilder }, { type: i4.ReportService }, { type: i5.AuthService }, { type: i6.ToastrService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentGradeSummaryComponent, { className: "StudentGradeSummaryComponent" }); })();
//# sourceMappingURL=student-grade-summary.component.js.map