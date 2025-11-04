import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function FormFieldWrapperComponent_label_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1, "*");
    i0.ɵɵelementEnd();
} }
function FormFieldWrapperComponent_label_1_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r0.helpText);
} }
function FormFieldWrapperComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 5);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, FormFieldWrapperComponent_label_1_span_2_Template, 2, 0, "span", 6)(3, FormFieldWrapperComponent_label_1_i_3_Template, 1, 1, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("for", ctx_r0.controlId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.helpText);
} }
function FormFieldWrapperComponent_em_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage, " ");
} }
function FormFieldWrapperComponent_small_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.helpText, " ");
} }
function FormFieldWrapperComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r0.currentLength || 0, " / ", ctx_r0.maxLength, " ");
} }
/**
 * Form Field Wrapper Component
 * Provides consistent layout for labels, form controls, errors, and help text
 * Enterprise-grade form field presentation
 */
export class FormFieldWrapperComponent {
    constructor() {
        this.label = '';
        this.controlId = '';
        this.required = false;
        this.showError = false;
        this.errorMessage = '';
        this.helpText = '';
        this.showCharCount = false;
        this.currentLength = 0;
        this.maxLength = 0;
    }
    static { this.ɵfac = function FormFieldWrapperComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormFieldWrapperComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormFieldWrapperComponent, selectors: [["app-form-field-wrapper"]], inputs: { label: "label", controlId: "controlId", required: "required", showError: "showError", errorMessage: "errorMessage", helpText: "helpText", showCharCount: "showCharCount", currentLength: "currentLength", maxLength: "maxLength" }, ngContentSelectors: _c0, decls: 6, vars: 6, consts: [[1, "form-group"], ["class", "form-label", 3, "for", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], ["class", "form-text text-muted text-right d-block", 4, "ngIf"], [1, "form-label", 3, "for"], ["class", "text-danger ml-1", "aria-label", "required", 4, "ngIf"], ["class", "fa fa-question-circle ml-1 text-muted", "style", "cursor: help; font-size: 0.875rem;", 3, "title", 4, "ngIf"], ["aria-label", "required", 1, "text-danger", "ml-1"], [1, "fa", "fa-question-circle", "ml-1", "text-muted", 2, "cursor", "help", "font-size", "0.875rem", 3, "title"], [1, "error"], [1, "form-text", "text-muted"], [1, "form-text", "text-muted", "text-right", "d-block"]], template: function FormFieldWrapperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, FormFieldWrapperComponent_label_1_Template, 4, 4, "label", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, FormFieldWrapperComponent_em_3_Template, 2, 1, "em", 2)(4, FormFieldWrapperComponent_small_4_Template, 2, 1, "small", 3)(5, FormFieldWrapperComponent_small_5_Template, 2, 2, "small", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("has-error", ctx.showError);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.label);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showError && ctx.errorMessage);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.showError && ctx.helpText);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCharCount && ctx.maxLength);
        } }, dependencies: [i1.NgIf], styles: [".form-group[_ngcontent-%COMP%] {\n      margin-bottom: 1rem;\n    }\n    \n    .form-group.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n   .form-group.has-error[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n      border-color: var(--color-error);\n    }\n    \n    .form-label[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 0.875rem;\n      font-weight: 500;\n      color: var(--neutral-700);\n      margin-bottom: 0.5rem;\n    }\n    \n    em.error[_ngcontent-%COMP%] {\n      display: block;\n      margin-top: 0.25rem;\n      font-size: 0.75rem;\n      color: var(--color-error);\n      font-style: normal;\n    }\n    \n    em.error[_ngcontent-%COMP%]::before {\n      content: \"\u26A0 \";\n      margin-right: 0.25rem;\n    }\n    \n    .text-right[_ngcontent-%COMP%] {\n      text-align: right;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldWrapperComponent, [{
        type: Component,
        args: [{ selector: 'app-form-field-wrapper', template: `
    <div class="form-group" [class.has-error]="showError">
      <!-- Label -->
      <label *ngIf="label" [for]="controlId" class="form-label">
        {{ label }}
        <span *ngIf="required" class="text-danger ml-1" aria-label="required">*</span>
        <i *ngIf="helpText" 
           class="fa fa-question-circle ml-1 text-muted" 
           [title]="helpText"
           style="cursor: help; font-size: 0.875rem;"></i>
      </label>
      
      <!-- Form Control Content (projected) -->
      <ng-content></ng-content>
      
      <!-- Error Message -->
      <em *ngIf="showError && errorMessage" class="error">
        {{ errorMessage }}
      </em>
      
      <!-- Help Text (shown when no error) -->
      <small *ngIf="!showError && helpText" class="form-text text-muted">
        {{ helpText }}
      </small>
      
      <!-- Character Counter -->
      <small *ngIf="showCharCount && maxLength" class="form-text text-muted text-right d-block">
        {{ currentLength || 0 }} / {{ maxLength }}
      </small>
    </div>
  `, styles: ["\n    .form-group {\n      margin-bottom: 1rem;\n    }\n    \n    .form-group.has-error .form-control,\n    .form-group.has-error .ng-select .ng-select-container {\n      border-color: var(--color-error);\n    }\n    \n    .form-label {\n      display: block;\n      font-size: 0.875rem;\n      font-weight: 500;\n      color: var(--neutral-700);\n      margin-bottom: 0.5rem;\n    }\n    \n    em.error {\n      display: block;\n      margin-top: 0.25rem;\n      font-size: 0.75rem;\n      color: var(--color-error);\n      font-style: normal;\n    }\n    \n    em.error::before {\n      content: \"\u26A0 \";\n      margin-right: 0.25rem;\n    }\n    \n    .text-right {\n      text-align: right;\n    }\n  "] }]
    }], () => [], { label: [{
            type: Input
        }], controlId: [{
            type: Input
        }], required: [{
            type: Input
        }], showError: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], helpText: [{
            type: Input
        }], showCharCount: [{
            type: Input
        }], currentLength: [{
            type: Input
        }], maxLength: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormFieldWrapperComponent, { className: "FormFieldWrapperComponent" }); })();
//# sourceMappingURL=form-field-wrapper.component.js.map