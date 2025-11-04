import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function FormSectionComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
function FormSectionComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-expanded", !ctx_r0.isCollapsed)("aria-controls", ctx_r0.sectionId);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-chevron-up", !ctx_r0.isCollapsed)("fa-chevron-down", ctx_r0.isCollapsed);
} }
function FormSectionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r0.sectionId);
} }
/**
 * Form Section Component
 * Creates visually distinct sections within forms
 * Supports collapsible sections for better UX
 */
export class FormSectionComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
        this.collapsible = false;
        this.startCollapsed = false;
        this.sectionId = `section-${Math.random().toString(36).substr(2, 9)}`;
        this.isCollapsed = false;
    }
    ngOnInit() {
        this.isCollapsed = this.startCollapsed;
    }
    toggleCollapse() {
        if (this.collapsible) {
            this.isCollapsed = !this.isCollapsed;
        }
    }
    static { this.ɵfac = function FormSectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormSectionComponent, selectors: [["app-form-section"]], inputs: { title: "title", subtitle: "subtitle", collapsible: "collapsible", startCollapsed: "startCollapsed", sectionId: "sectionId" }, ngContentSelectors: _c0, decls: 8, vars: 8, consts: [[1, "form-section"], [1, "section-header", 3, "click"], [1, "section-title"], ["class", "section-subtitle", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-link", 4, "ngIf"], ["class", "section-body", 3, "id", 4, "ngIf"], [1, "section-subtitle"], ["type", "button", 1, "btn", "btn-sm", "btn-link"], [1, "fa"], [1, "section-body", 3, "id"]], template: function FormSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵlistener("click", function FormSectionComponent_Template_div_click_1_listener() { return ctx.toggleCollapse(); });
            i0.ɵɵelementStart(2, "div")(3, "h3", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, FormSectionComponent_p_5_Template, 2, 1, "p", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, FormSectionComponent_button_6_Template, 2, 6, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, FormSectionComponent_div_7_Template, 2, 1, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("collapsed", ctx.isCollapsed && ctx.collapsible);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("clickable", ctx.collapsible);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.collapsible);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isCollapsed);
        } }, dependencies: [i1.NgIf], styles: [".form-section[_ngcontent-%COMP%] {\n      background: #fff;\n      border: 1px solid var(--neutral-200);\n      border-radius: var(--radius-lg);\n      padding: var(--spacing-6);\n      margin-bottom: var(--spacing-6);\n      box-shadow: var(--shadow-sm);\n      transition: box-shadow var(--transition-base) ease;\n    }\n    \n    .form-section[_ngcontent-%COMP%]:hover {\n      box-shadow: var(--shadow-md);\n    }\n    \n    .section-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      margin-bottom: var(--spacing-4);\n      padding-bottom: var(--spacing-3);\n      border-bottom: 2px solid var(--neutral-200);\n    }\n    \n    .section-header.clickable[_ngcontent-%COMP%] {\n      cursor: pointer;\n      user-select: none;\n    }\n    \n    .section-title[_ngcontent-%COMP%] {\n      font-size: 1.125rem;\n      font-weight: 600;\n      color: var(--neutral-900);\n      margin: 0;\n      display: flex;\n      align-items: center;\n    }\n    \n    .section-title[_ngcontent-%COMP%]::before {\n      content: \"\";\n      display: inline-block;\n      width: 4px;\n      height: 1.125rem;\n      background-color: var(--color-primary);\n      margin-right: var(--spacing-3);\n      border-radius: var(--radius-base);\n    }\n    \n    .section-subtitle[_ngcontent-%COMP%] {\n      font-size: 0.875rem;\n      color: var(--neutral-600);\n      margin-top: var(--spacing-1);\n      margin-bottom: 0;\n    }\n    \n    .section-body[_ngcontent-%COMP%] {\n      animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n    }\n    \n    @keyframes _ngcontent-%COMP%_slideDown {\n      from {\n        opacity: 0;\n        transform: translateY(-10px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n    \n    .form-section.collapsed[_ngcontent-%COMP%] {\n      padding-bottom: var(--spacing-4);\n    }\n    \n    .btn-link[_ngcontent-%COMP%] {\n      color: var(--color-primary);\n      text-decoration: none;\n      padding: 0.25rem 0.5rem;\n    }\n    \n    .btn-link[_ngcontent-%COMP%]:hover {\n      color: var(--color-primary-dark);\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-form-section', template: `
    <div class="form-section" [class.collapsed]="isCollapsed && collapsible">
      <div class="section-header" [class.clickable]="collapsible" (click)="toggleCollapse()">
        <div>
          <h3 class="section-title">
            {{ title }}
          </h3>
          <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
        </div>
        <button 
          *ngIf="collapsible" 
          type="button" 
          class="btn btn-sm btn-link"
          [attr.aria-expanded]="!isCollapsed"
          [attr.aria-controls]="sectionId">
          <i class="fa" [class.fa-chevron-up]="!isCollapsed" [class.fa-chevron-down]="isCollapsed"></i>
        </button>
      </div>
      
      <div class="section-body" [id]="sectionId" *ngIf="!isCollapsed">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: ["\n    .form-section {\n      background: #fff;\n      border: 1px solid var(--neutral-200);\n      border-radius: var(--radius-lg);\n      padding: var(--spacing-6);\n      margin-bottom: var(--spacing-6);\n      box-shadow: var(--shadow-sm);\n      transition: box-shadow var(--transition-base) ease;\n    }\n    \n    .form-section:hover {\n      box-shadow: var(--shadow-md);\n    }\n    \n    .section-header {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      margin-bottom: var(--spacing-4);\n      padding-bottom: var(--spacing-3);\n      border-bottom: 2px solid var(--neutral-200);\n    }\n    \n    .section-header.clickable {\n      cursor: pointer;\n      user-select: none;\n    }\n    \n    .section-title {\n      font-size: 1.125rem;\n      font-weight: 600;\n      color: var(--neutral-900);\n      margin: 0;\n      display: flex;\n      align-items: center;\n    }\n    \n    .section-title::before {\n      content: \"\";\n      display: inline-block;\n      width: 4px;\n      height: 1.125rem;\n      background-color: var(--color-primary);\n      margin-right: var(--spacing-3);\n      border-radius: var(--radius-base);\n    }\n    \n    .section-subtitle {\n      font-size: 0.875rem;\n      color: var(--neutral-600);\n      margin-top: var(--spacing-1);\n      margin-bottom: 0;\n    }\n    \n    .section-body {\n      animation: slideDown 0.3s ease-out;\n    }\n    \n    @keyframes slideDown {\n      from {\n        opacity: 0;\n        transform: translateY(-10px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n    \n    .form-section.collapsed {\n      padding-bottom: var(--spacing-4);\n    }\n    \n    .btn-link {\n      color: var(--color-primary);\n      text-decoration: none;\n      padding: 0.25rem 0.5rem;\n    }\n    \n    .btn-link:hover {\n      color: var(--color-primary-dark);\n    }\n  "] }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], startCollapsed: [{
            type: Input
        }], sectionId: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormSectionComponent, { className: "FormSectionComponent" }); })();
//# sourceMappingURL=form-section.component.js.map