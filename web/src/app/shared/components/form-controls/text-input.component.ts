import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TerminologyService } from '../../services/terminology.service';

/**
 * Reusable Text Input Component
 * Enterprise-grade text input with consistent styling and validation
 */
@Component({
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
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() inputId: string = `text-input-${Math.random().toString(36).substr(2, 9)}`;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxLength: number = 0;
  @Input() minLength: number = 0;
  @Input() showCharCount: boolean = false;
  @Input() errorMessage: string = '';
  @Input() helpText: string = '';
  @Input() ariaLabel: string = '';
  @Input() showError: boolean = false;

  value: string = '';

  private onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private terminology: TerminologyService) {}

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}

