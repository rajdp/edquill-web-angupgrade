import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class EmptyschoolComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    routeSchool() {
        this.router.navigate(['/School/create-School/add']);
    }
    static { this.ɵfac = function EmptyschoolComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EmptyschoolComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmptyschoolComponent, selectors: [["app-emptyschool"]], decls: 16, vars: 2, consts: [[1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "mt-3", 2, "color", "#7F3486", "text-align", "center", "font-weight", "bold"], [1, "row", "my-5", "d-flex", "justify-content-center"], [1, "card", "pt-4", "login-card"], [1, "row", "form-group"], [1, "col-md-12", 2, "text-align", "center", "color", "#7F3486", "font-weight", "bold", 3, "routerLink"], [1, "row", "fit-image"], [1, "card", "imghvr-reveal-up", "school-img"], ["src", "assets/images/ristaschool/school-default.png", "alt", "", 2, "border-radius", "0", 3, "routerLink"]], template: function EmptyschoolComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
            i0.ɵɵtext(6, "Please Register an Institution to proceed further");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 2)(9, "div", 7)(10, "div", 8)(11, "h4", 9);
            i0.ɵɵtext(12, "Click Here");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 10)(14, "div", 11);
            i0.ɵɵelement(15, "img", 12);
            i0.ɵɵelementEnd()()()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("routerLink", "/School/create-School/add");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", "/School/create-School/add");
        } }, dependencies: [i1.RouterLink] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptyschoolComponent, [{
        type: Component,
        args: [{ selector: 'app-emptyschool', template: "<div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"mt-3\" style=\"color: #7F3486; text-align: center; font-weight: bold\">Please Register an Institution to proceed further</h4>\n                    <div class=\"row my-5 d-flex justify-content-center\">\n                        <div class=\"col-md-6\">\n                            <div class=\"card pt-4 login-card\">\n                                <div class=\"row form-group\">\n                                    <h4 class=\"col-md-12\" style=\"text-align: center; color: #7F3486; font-weight: bold\" [routerLink]=\"'/School/create-School/add'\">Click Here</h4>\n                                </div>\n                                <div class=\"row fit-image\">\n                                    <div class=\"card imghvr-reveal-up school-img\" style=\"\">\n                                        <img src=\"assets/images/ristaschool/school-default.png\" alt=\"\" style=\"border-radius: 0\" [routerLink]=\"'/School/create-School/add'\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>" }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmptyschoolComponent, { className: "EmptyschoolComponent" }); })();
//# sourceMappingURL=emptyschool.component.js.map