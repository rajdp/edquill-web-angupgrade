import { Component, Input } from '@angular/core';

/**
 * Form Section Component
 * Creates visually distinct sections within forms
 * Supports collapsible sections for better UX
 */
@Component({
  selector: 'app-form-section',
  template: `
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
  `,
  styles: [`
    .form-section {
      background: #fff;
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      padding: var(--spacing-6);
      margin-bottom: var(--spacing-6);
      box-shadow: var(--shadow-sm);
      transition: box-shadow var(--transition-base) ease;
    }
    
    .form-section:hover {
      box-shadow: var(--shadow-md);
    }
    
    .section-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: var(--spacing-4);
      padding-bottom: var(--spacing-3);
      border-bottom: 2px solid var(--neutral-200);
    }
    
    .section-header.clickable {
      cursor: pointer;
      user-select: none;
    }
    
    .section-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin: 0;
      display: flex;
      align-items: center;
    }
    
    .section-title::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 1.125rem;
      background-color: var(--color-primary);
      margin-right: var(--spacing-3);
      border-radius: var(--radius-base);
    }
    
    .section-subtitle {
      font-size: 0.875rem;
      color: var(--neutral-600);
      margin-top: var(--spacing-1);
      margin-bottom: 0;
    }
    
    .section-body {
      animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .form-section.collapsed {
      padding-bottom: var(--spacing-4);
    }
    
    .btn-link {
      color: var(--color-primary);
      text-decoration: none;
      padding: 0.25rem 0.5rem;
    }
    
    .btn-link:hover {
      color: var(--color-primary-dark);
    }
  `]
})
export class FormSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() collapsible: boolean = false;
  @Input() startCollapsed: boolean = false;
  @Input() sectionId: string = `section-${Math.random().toString(36).substr(2, 9)}`;

  isCollapsed: boolean = false;

  ngOnInit() {
    this.isCollapsed = this.startCollapsed;
  }

  toggleCollapse() {
    if (this.collapsible) {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}

