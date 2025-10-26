import { Component, Input } from '@angular/core';

/**
 * Form Field Wrapper Component
 * Provides consistent layout for labels, form controls, errors, and help text
 * Enterprise-grade form field presentation
 */
@Component({
  selector: 'app-form-field-wrapper',
  template: `
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
  `,
  styles: [`
    .form-group {
      margin-bottom: 1rem;
    }
    
    .form-group.has-error .form-control,
    .form-group.has-error .ng-select .ng-select-container {
      border-color: var(--color-error);
    }
    
    .form-label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--neutral-700);
      margin-bottom: 0.5rem;
    }
    
    em.error {
      display: block;
      margin-top: 0.25rem;
      font-size: 0.75rem;
      color: var(--color-error);
      font-style: normal;
    }
    
    em.error::before {
      content: "⚠ ";
      margin-right: 0.25rem;
    }
    
    .text-right {
      text-align: right;
    }
  `]
})
export class FormFieldWrapperComponent {
  @Input() label: string = '';
  @Input() controlId: string = '';
  @Input() required: boolean = false;
  @Input() showError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() helpText: string = '';
  @Input() showCharCount: boolean = false;
  @Input() currentLength: number = 0;
  @Input() maxLength: number = 0;

  constructor() {}
}

