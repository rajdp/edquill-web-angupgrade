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

/**
 * Form Controls Module
 * Contains all reusable form control components
 * Provides enterprise-grade form building blocks
 */
@NgModule({
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
})
export class FormControlsModule { }

