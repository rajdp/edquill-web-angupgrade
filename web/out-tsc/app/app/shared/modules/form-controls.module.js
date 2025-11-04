import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from '@nodro7/angular-mydatepicker';
// Form Control Components
import { FormFieldWrapperComponent } from '../components/form-controls/form-field-wrapper.component';
import { TextInputComponent } from '../components/form-controls/text-input.component';
import { FormSectionComponent } from '../components/form-controls/form-section.component';
import { ContactInfoGroupComponent } from '../components/form-controls/contact-info-group.component';
import * as i0 from "@angular/core";
/**
 * Form Controls Module
 * Contains all reusable form control components
 * Provides enterprise-grade form building blocks
 */
export class FormControlsModule {
    static { this.ɵfac = function FormControlsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormControlsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FormControlsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            AngularMyDatePickerModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormControlsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FormFieldWrapperComponent,
                    TextInputComponent,
                    FormSectionComponent,
                    ContactInfoGroupComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NgSelectModule,
                    AngularMyDatePickerModule
                ],
                exports: [
                    FormFieldWrapperComponent,
                    TextInputComponent,
                    FormSectionComponent,
                    ContactInfoGroupComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormControlsModule, { declarations: [FormFieldWrapperComponent,
        TextInputComponent,
        FormSectionComponent,
        ContactInfoGroupComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        AngularMyDatePickerModule], exports: [FormFieldWrapperComponent,
        TextInputComponent,
        FormSectionComponent,
        ContactInfoGroupComponent] }); })();
//# sourceMappingURL=form-controls.module.js.map