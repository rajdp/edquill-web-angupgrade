import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "../../../environment.service";
import * as i4 from "ngx-toastr";
import * as i5 from "@angular/router";
import * as i6 from "@angular/forms";
export class EnrollclassComponent {
    constructor(auth, student, env, toastr, route) {
        this.auth = auth;
        this.student = student;
        this.env = env;
        this.toastr = toastr;
        this.route = route;
        if (localStorage.getItem('studentClassCode') == 'undefined' || localStorage.getItem('studentClassCode') == null) {
            this.classCode = '';
        }
        else {
            this.classCode = localStorage.getItem('studentClassCode');
        }
    }
    ngOnInit() {
    }
    enrollClass() {
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            class_code: this.classCode,
            student_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
        };
        console.log(data, 'data');
        this.student.enrollClass(data).subscribe((successData) => {
            this.enrollClassSuccess(successData);
        }, (error) => {
            this.enrollClassFailure(error);
        });
    }
    enrollClassSuccess(successData) {
        if (successData.IsSuccess) {
            this.toastr.success(successData.ResponseObject.Message);
            this.auth.setSessionData('class-id', successData.ResponseObject.class_id);
            this.auth.setSessionData('schedule_id', successData.ResponseObject.schedule_id);
            this.route.navigate(['/studentlogin/class-detail']);
            localStorage.removeItem('studentClassCode');
        }
        else {
            this.toastr.error(successData.ErrorObject);
        }
    }
    enrollClassFailure(error) {
        console.log(error);
    }
    static { this.ɵfac = function EnrollclassComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EnrollclassComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.StudentService), i0.ɵɵdirectiveInject(i3.EnvironmentService), i0.ɵɵdirectiveInject(i4.ToastrService), i0.ɵɵdirectiveInject(i5.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnrollclassComponent, selectors: [["app-enrollclass"]], decls: 15, vars: 4, consts: [[1, "alignment_contnet"], [1, "container", "col-10"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-12", "p-0", "card-right"], [1, "card"], [1, "card-body"], [1, "container-fluid"], [1, "col-12", "mt-5", "d-flex", "justify-content-around"], [1, "card", "col-12", "p-4"], ["placeholder", "Enter the class code", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12", "text-right"], ["type", "button", 3, "click"]], template: function EnrollclassComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "label");
            i0.ɵɵtext(10, "Enter the class code");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function EnrollclassComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.classCode, $event) || (ctx.classCode = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 10)(13, "button", 11);
            i0.ɵɵlistener("click", function EnrollclassComponent_Template_button_click_13_listener() { return ctx.enrollClass(); });
            i0.ɵɵtext(14, "Join Class ");
            i0.ɵɵelementEnd()()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.classCode);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("btn btn-primary ", ctx.env.deviceType() ? "border-radius-5" : "", "");
        } }, dependencies: [i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel], styles: [".alignment_contnet[_ngcontent-%COMP%] {\n    min-height: 80vh;\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnrollclassComponent, [{
        type: Component,
        args: [{ selector: 'app-enrollclass', template: "<div class=\"alignment_contnet\">\n    <div class=\"container col-10\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-12 p-0 card-right\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"container-fluid\">\n                            <div class=\"col-12 mt-5 d-flex justify-content-around\">\n                                <div class=\"card col-12 p-4\">\n                                    <label>Enter the class code</label>\n                                    <input class=\"form-control\" [(ngModel)]=\"classCode\" placeholder=\"Enter the class code\">\n                                </div>\n                            </div>\n                            <div class=\"col-12 text-right\">\n                                <button type=\"button\" class=\"btn btn-primary {{env.deviceType() ? 'border-radius-5' : ''}}\" (click)=\"enrollClass()\">Join Class\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".alignment_contnet {\n    min-height: 80vh;\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.EnvironmentService }, { type: i4.ToastrService }, { type: i5.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnrollclassComponent, { className: "EnrollclassComponent" }); })();
//# sourceMappingURL=enrollclass.component.js.map