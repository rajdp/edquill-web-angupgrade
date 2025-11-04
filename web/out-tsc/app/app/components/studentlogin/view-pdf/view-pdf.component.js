import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/configuration.service";
import * as i3 from "../../../shared/service/newsubject.service";
import * as i4 from "@angular/common";
import * as i5 from "ng2-pdf-viewer";
function ViewPDFComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "img", 11);
    i0.ɵɵelementEnd();
} }
export class ViewPDFComponent {
    constructor(auth, confi, newSubject) {
        this.auth = auth;
        this.confi = confi;
        this.newSubject = newSubject;
        this.customPdfLoader = true;
        this.webhost = this.confi.getimgUrl();
        console.log(this.webhost, 'webhost');
        this.pdfDetails = JSON.parse(this.auth.getSessionData('view_pdf_url_details'));
        console.log(this.pdfDetails, 'pdfDetails');
        this.pdfTemplate = this.webhost + '/' + this.pdfDetails.downloadPDF[0]?.original_image_url;
    }
    ngOnDestroy() {
        this.newSubject.allowSchoolChange(false);
    }
    ngOnInit() {
        this.newSubject.allowSchoolChange(true);
    }
    callBackFn() {
        this.customPdfLoader = false;
    }
    static { this.ɵfac = function ViewPDFComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ViewPDFComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.ConfigurationService), i0.ɵɵdirectiveInject(i3.NewsubjectService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewPDFComponent, selectors: [["app-view-pdf"]], decls: 12, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "my-2", "font-weight-bold", "text-capitalize"], [1, "contenttext"], [1, "card-body"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], [2, "display", "block", "height", "100vh", 3, "after-load-complete", "src", "zoom", "original-size", "fit-to-page", "show-all"], ["id", "custom-pdf-loader", 2, "height", "100vh"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""]], template: function ViewPDFComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
            i0.ɵɵtext(6, "Class Name - ");
            i0.ɵɵelementStart(7, "span", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 7);
            i0.ɵɵtemplate(10, ViewPDFComponent_div_10_Template, 2, 0, "div", 8);
            i0.ɵɵelementStart(11, "pdf-viewer", 9);
            i0.ɵɵlistener("after-load-complete", function ViewPDFComponent_Template_pdf_viewer_after_load_complete_11_listener() { return ctx.callBackFn(); });
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.pdfDetails.class_name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.customPdfLoader);
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.pdfTemplate)("zoom", 1)("original-size", false)("fit-to-page", true)("show-all", true);
        } }, dependencies: [i4.NgIf, i5.PdfViewerComponent], styles: [".ng2-pdf-viewer-container[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewPDFComponent, [{
        type: Component,
        args: [{ selector: 'app-view-pdf', template: "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h4 class=\"my-2 font-weight-bold text-capitalize\">Class Name - <span class=\"contenttext\">{{pdfDetails.class_name}}</span></h4>\n                </div>\n                <div class=\"card-body\">\n                    <div id=\"custom-pdf-loader\" *ngIf=\"customPdfLoader\" style=\"height: 100vh;\">\n                        <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n                    </div>\n                    <pdf-viewer [src]=\"pdfTemplate\" [zoom]=\"1.0\"\n                                [original-size]=\"false\"\n                                [fit-to-page]=\"true\"\n                                (after-load-complete)=\"callBackFn()\"\n                                [show-all]=\"true\"\n                                style=\"display: block; height: 100vh;\"\n                    >\n                    </pdf-viewer>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n", styles: [".ng2-pdf-viewer-container {\n  overflow-x: hidden !important;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.ConfigurationService }, { type: i3.NewsubjectService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ViewPDFComponent, { className: "ViewPDFComponent" }); })();
//# sourceMappingURL=view-pdf.component.js.map