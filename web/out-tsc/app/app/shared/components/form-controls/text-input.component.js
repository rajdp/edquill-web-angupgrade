import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../services/terminology.service";
import * as i2 from "./form-field-wrapper.component";
/**
 * Reusable Text Input Component
 * Enterprise-grade text input with consistent styling and validation
 */
export class TextInputComponent {
    constructor(terminology) {
        this.terminology = terminology;
        this.label = '';
        this.inputId = `text-input-${Math.random().toString(36).substr(2, 9)}`;
        this.type = 'text';
        this.placeholder = '';
        this.required = false;
        this.disabled = false;
        this.readonly = false;
        this.maxLength = 0;
        this.minLength = 0;
        this.showCharCount = false;
        this.errorMessage = '';
        this.helpText = '';
        this.ariaLabel = '';
        this.showError = false;
        this.value = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onInput(event) {
        const input = event.target;
        this.value = input.value;
        this.onChange(this.value);
    }
    static { this.ɵfac = function TextInputComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TextInputComponent)(i0.ɵɵdirectiveInject(i1.TerminologyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextInputComponent, selectors: [["app-text-input"]], inputs: { label: "label", inputId: "inputId", type: "type", placeholder: "placeholder", required: "required", disabled: "disabled", readonly: "readonly", maxLength: "maxLength", minLength: "minLength", showCharCount: "showCharCount", errorMessage: "errorMessage", helpText: "helpText", ariaLabel: "ariaLabel", showError: "showError" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => TextInputComponent),
                    multi: true
                }
            ])], decls: 2, vars: 23, consts: [[3, "label", "controlId", "required", "showError", "errorMessage", "helpText", "showCharCount", "currentLength", "maxLength"], [1, "form-control", 3, "input", "blur", "id", "type", "placeholder", "value", "disabled", "readonly"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-form-field-wrapper", 0)(1, "input", 1);
            i0.ɵɵlistener("input", function TextInputComponent_Template_input_input_1_listener($event) { return ctx.onInput($event); })("blur", function TextInputComponent_Template_input_blur_1_listener() { return ctx.onTouched(); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("label", ctx.label)("controlId", ctx.inputId)("required", ctx.required)("showError", ctx.showError)("errorMessage", ctx.errorMessage)("helpText", ctx.helpText)("showCharCount", ctx.showCharCount)("currentLength", (ctx.value == null ? null : ctx.value.length) || 0)("maxLength", ctx.maxLength);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-invalid", ctx.showError);
            i0.ɵɵproperty("id", ctx.inputId)("type", ctx.type)("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled)("readonly", ctx.readonly);
            i0.ɵɵattribute("maxlength", ctx.maxLength > 0 ? ctx.maxLength : null)("minlength", ctx.minLength > 0 ? ctx.minLength : null)("aria-label", ctx.ariaLabel || ctx.label)("aria-required", ctx.required)("aria-invalid", ctx.showError)("aria-describedby", ctx.helpText ? ctx.inputId + "-help" : null);
        } }, dependencies: [i2.FormFieldWrapperComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextInputComponent, [{
        type: Component,
        args: [{
                selector: 'app-text-input',
                template: `
    <app-form-field-wrapper
      [label]="label"
      [controlId]="inputId"
      [required]="required"
      [showError]="showError"
      [errorMessage]="errorMessage"
      [helpText]="helpText"
      [showCharCount]="showCharCount"
      [currentLength]="value?.length || 0"
      [maxLength]="maxLength">
      
      <input
        [id]="inputId"
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [disabled]="disabled"
        [readonly]="readonly"
        [attr.maxlength]="maxLength > 0 ? maxLength : null"
        [attr.minlength]="minLength > 0 ? minLength : null"
        [attr.aria-label]="ariaLabel || label"
        [attr.aria-required]="required"
        [attr.aria-invalid]="showError"
        [attr.aria-describedby]="helpText ? inputId + '-help' : null"
        class="form-control"
        [class.is-invalid]="showError"
      />
    </app-form-field-wrapper>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextInputComponent),
                        multi: true
                    }
                ]
            }]
    }], () => [{ type: i1.TerminologyService }], { label: [{
            type: Input
        }], inputId: [{
            type: Input
        }], type: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], minLength: [{
            type: Input
        }], showCharCount: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], helpText: [{
            type: Input
        }], ariaLabel: [{
            type: Input
        }], showError: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TextInputComponent, { className: "TextInputComponent" }); })();
//# sourceMappingURL=text-input.component.js.map