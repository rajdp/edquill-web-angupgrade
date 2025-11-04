import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CommonService } from '../../../shared/service/common.service';
import { NewsubjectService } from '../../../shared/service/newsubject.service';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../../../shared/service/auth.service";
import * as i4 from "../../../shared/service/configuration.service";
import * as i5 from "../../../shared/service/login.service";
import * as i6 from "@angular/router";
import * as i7 from "@angular/common";
function SelectionComponent_div_4_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 12);
} }
function SelectionComponent_div_4_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 13);
} if (rf & 2) {
    const school_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r2.sanitizer.bypassSecurityTrustResourceUrl(ctx_r2.webHost + "/" + school_r2.profile_url), i0.ɵɵsanitizeUrl);
} }
function SelectionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵlistener("click", function SelectionComponent_div_4_Template_div_click_1_listener() { const school_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.loginIntoSchool(school_r2)); });
    i0.ɵɵelementStart(2, "div", 6)(3, "div", 7);
    i0.ɵɵtemplate(4, SelectionComponent_div_4_img_4_Template, 1, 0, "img", 8)(5, SelectionComponent_div_4_img_5_Template, 1, 1, "img", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 10)(7, "h4", 11);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const school_r2 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", school_r2.profile_url == "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", school_r2.profile_url != "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(school_r2.name);
} }
export class SelectionComponent {
    constructor(commondata, sanitizer, auth, confi, loginService, router) {
        this.commondata = commondata;
        this.sanitizer = sanitizer;
        this.auth = auth;
        this.confi = confi;
        this.loginService = loginService;
        this.router = router;
        this.schoolDetails = [];
        this.common = inject(CommonService);
        this.behavior = inject(NewsubjectService);
        this.timeZoneList = [];
        this.webHost = this.confi.getimgUrl();
        this.listData = JSON.parse(this.auth.getSessionData('permission'));
        this.schoolDetails = JSON.parse(this.auth.getSessionData('school_details'));
        console.log(this.listData, 'console.log(data, \'school_id\');');
    }
    ngOnInit() {
    }
    loginIntoSchool(data) {
        console.log(data, 'dasdasdas');
        this.auth.setSessionData('rista_data1', JSON.stringify(data));
        this.auth.setSessionData('school_id', data.school_id);
        this.auth.setSessionData('school_name', data.name);
        this.auth.setSessionData('school_profile', data.profile_url);
        this.auth.setSessionData('resourceAccess', false);
        this.loginService.changeHomePage(this.auth.getRoleId());
        if (this.auth.getRoleId() == '2') {
            this.getTimeZone();
            setTimeout(() => {
                data.allow_dashboard == '1' ? this.router.navigate(['/dashboard/default']) :
                    this.router.navigate(['/schedule/schedule-page']);
            }, 700);
        }
        else if (this.auth.getRoleId() == '3') {
            this.auth.setSessionData('designation', data.designation);
            this.router.navigate(['/repository/content-home']);
        }
        else if (this.auth.getRoleId() == '4') {
            this.getTimeZone();
            this.auth.setSessionData('teacher_type', data.individual_teacher);
            this.auth.setSessionData('teacher_id', data.school_idno);
            setTimeout(() => {
                this.router.navigate(['/schedule/schedule-page']);
            }, 700);
        }
        else if (this.auth.getRoleId() == '5') {
            this.getTimeZone();
            this.auth.setSessionData('selected-name', data.school_id);
            const getClassCode = localStorage.getItem('studentClassCode');
            if (getClassCode) {
                if (getClassCode != '') {
                    this.router.navigate(['/studentlogin/enrollclass']);
                }
                else {
                    this.router.navigate(['/student/dashboard']);
                    // this.router.navigate(['/studentlogin/list-home']);
                }
            }
            else {
                // this.router.navigate(['/studentlogin/list-home']);
                this.router.navigate(['/student/dashboard']);
            }
        }
        else if (this.auth.getRoleId() == '6') {
            this.router.navigate(['/dashboard/default']);
        }
        else if (this.auth.getRoleId() == '7') {
            this.auth.setSessionData('teacher_type', data.individual_teacher);
            this.router.navigate(['/student-content/list-content/old']);
        }
    }
    getTimeZone() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId()
        };
        this.common.timeZone(data).subscribe((successData) => {
            this.timeZoneSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    timeZoneSuccess(successData) {
        if (successData.IsSuccess) {
            this.timeZoneList = successData.ResponseObject;
            this.settingList();
        }
    }
    settingList() {
        const data = {
            platform: 'web',
            type: 'list',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.common.settingsDetails(data).subscribe((successData) => {
            this.listSuccess(successData);
        }, (error) => {
            console.error(error, 'error');
        });
    }
    listSuccess(successData) {
        if (successData.IsSuccess) {
            this.auth.setSessionData('settingList', JSON.stringify(successData.ResponseObject));
            if (this.auth.getRoleId() != '5') {
                successData.ResponseObject.forEach((item) => {
                    if (item.name == 'date_format') {
                        this.behavior.changeDateFormat(item.date);
                    }
                    else if (item.name == 'timezone') {
                        this.timeZoneList.forEach((list) => {
                            if (item.value == list.id) {
                                const split = list.time_zone.split('(');
                                this.behavior.changeTimeZone(split[0]);
                            }
                        });
                    }
                });
            }
            this.auth.setSessionData('settingList', JSON.stringify(successData.ResponseObject));
        }
    }
    static { this.ɵfac = function SelectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectionComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.ConfigurationService), i0.ɵɵdirectiveInject(i5.LoginService), i0.ɵɵdirectiveInject(i6.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectionComponent, selectors: [["app-selection"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [[1, "container", 2, "display", "block"], [1, "mt-5", 2, "color", "#7F3486", "text-align", "center", "font-weight", "bold"], [1, "row", "my-5", "justify-content-center"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "card", "pt-4", "login-card", 3, "click"], [1, "row", "fit-image-selection"], [1, "card", "imghvr-reveal-up", "school-img", "py-3"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", "style", "border-radius: 0", 4, "ngIf"], ["class", "card-img img-thumbnail", "style", "width: 100% !important;", "alt", "", 3, "src", 4, "ngIf"], [1, "row", "form-group", "mt-4"], [1, "col-md-12", 2, "text-align", "center", "color", "#7F3486", "font-weight", "bold"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", 2, "border-radius", "0"], ["alt", "", 1, "card-img", "img-thumbnail", 2, "width", "100% !important", 3, "src"]], template: function SelectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2, "Select Institution");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, SelectionComponent_div_4_Template, 9, 3, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.schoolDetails);
        } }, dependencies: [CommonModule, i7.NgForOf, i7.NgIf, RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectionComponent, [{
        type: Component,
        args: [{ selector: 'app-selection', standalone: true, imports: [CommonModule, RouterModule], template: "<div class=\"container\" style=\"display: block\">\n    <h4 class=\"mt-5\" style=\"color: #7F3486; text-align: center; font-weight: bold\">Select Institution</h4>\n    <div class=\"row my-5 justify-content-center\">\n        <div class=\"col-md-3\" *ngFor=\"let school of schoolDetails; let i = index\">\n            <div class=\"card pt-4 login-card\" (click)=\"loginIntoSchool(school)\">\n                <div class=\"row fit-image-selection\">\n                    <div class=\"card imghvr-reveal-up school-img py-3\" style=\"\">\n                        <img *ngIf=\"school.profile_url == ''\" src=\"assets/images/ristaschool/school-default.png\" alt=\"\" style=\"border-radius: 0\">\n                        <img *ngIf=\"school.profile_url != ''\" class=\"card-img img-thumbnail\" style=\"width: 100% !important;\"\n                             [src]=\"sanitizer.bypassSecurityTrustResourceUrl(webHost + '/' + school.profile_url)\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"row form-group mt-4\">\n                    <h4 class=\"col-md-12\" style=\"text-align: center; color: #7F3486; font-weight: bold\">{{school.name}}</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.CommonDataService }, { type: i2.DomSanitizer }, { type: i3.AuthService }, { type: i4.ConfigurationService }, { type: i5.LoginService }, { type: i6.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectionComponent, { className: "SelectionComponent" }); })();
//# sourceMappingURL=selection.component.js.map