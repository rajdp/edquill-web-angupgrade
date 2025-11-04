import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "../../auth/table/table.component";
import * as i4 from "../../corporateschool/emptyschool/emptyschool.component";
function GlobalAnnouncementListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h5");
    i0.ɵɵtext(4, "Global Announcement Details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "a", 9);
    i0.ɵɵtext(10, "Add Global Announcement");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(11, "div", 10)(12, "div", 11)(13, "app-table", 12);
    i0.ɵɵlistener("clickValue", function GlobalAnnouncementListComponent_div_0_Template_app_table_clickValue_13_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.emittedValue($event)); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("routerLink", "/global-announcement/create-announcement/add");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("TableType", "GlobalAnnouncement")("TableArray", ctx_r1.globalAnnouncementListData);
} }
function GlobalAnnouncementListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-emptyschool");
    i0.ɵɵelementEnd();
} }
export class GlobalAnnouncementListComponent {
    constructor() {
        this.globalAnnouncementListData = [];
        this.auth = inject(AuthService);
        this.toastr = inject(ToastrService);
        this.route = inject(Router);
        this.schoolStatus = JSON.parse(this.auth.getSessionData('school_details'));
        this.globalAnnouncementList();
    }
    globalAnnouncementList() {
        const payload = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        this.auth.postService(payload, 'school/announcementList').subscribe((successData) => {
            console.log(successData, 'successData');
            this.globalAnnouncementListData = successData.IsSuccess ? successData.ResponseObject : [];
            this.globalAnnouncementListData.forEach(value => {
                value.status_name = value.status == '1' ? 'Active' : value.status == '2' ? 'Suspended' :
                    value.status == '3' ? 'Disengaged' : 'Deleted';
            });
            console.log(this.globalAnnouncementListData, 'globalAnnouncementListData');
        }, (error) => console.error(error, 'error_globalAnnoucement'));
    }
    emittedValue(event) {
        console.log(event, 'emiitedValue');
        if (event.emitType == 'edit') {
            this.auth.setSessionData('edit_global_announcement', JSON.stringify(event.emitData));
            this.route.navigate(['/global-announcement/create-announcement/edit']);
        }
    }
    static { this.ɵfac = function GlobalAnnouncementListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GlobalAnnouncementListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GlobalAnnouncementListComponent, selectors: [["app-global-announcement"]], decls: 2, vars: 2, consts: [["class", "container-fluid", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "routerLink"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "clickValue", "TableType", "TableArray"]], template: function GlobalAnnouncementListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GlobalAnnouncementListComponent_div_0_Template, 14, 3, "div", 0)(1, GlobalAnnouncementListComponent_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length != 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.schoolStatus.length == 0);
        } }, dependencies: [i1.NgIf, i2.RouterLink, i3.TableComponent, i4.EmptyschoolComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalAnnouncementListComponent, [{
        type: Component,
        args: [{ selector: 'app-global-announcement', template: "<div class=\"container-fluid\" *ngIf=\"schoolStatus.length != 0\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Global Announcement Details</h5>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"btn-popup pull-right\">\n                        <a class=\"btn btn-primary\" [routerLink]=\"'/global-announcement/create-announcement/add'\">Add Global Announcement</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"batchDelete\" class=\"category-table custom-datatable transcation-datatable user-image\">\n                <div class=\"table-responsive\">\n                    <app-table [TableType]=\"'GlobalAnnouncement'\" [TableArray]=\"globalAnnouncementListData\" (clickValue)=\"emittedValue($event)\" ></app-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"schoolStatus.length == 0\">\n    <app-emptyschool>\n    </app-emptyschool>\n</div>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GlobalAnnouncementListComponent, { className: "GlobalAnnouncementListComponent" }); })();
//# sourceMappingURL=global-announcement-list.component.js.map