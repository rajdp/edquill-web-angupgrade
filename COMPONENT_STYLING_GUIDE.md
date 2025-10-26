# Component Styling Guide - EdQuill Enterprise Theme

## Quick Reference for Developers

This guide helps you apply consistent styling to all components in the EdQuill application.

## Color Variables

**Always use CSS variables instead of hardcoded colors:**

```scss
/* ✅ CORRECT - Use variables */
.my-button {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}

/* ❌ WRONG - Don't hardcode */
.my-button {
  background-color: #8F008A;
  color: #ffffff;
}
```

### Available Color Variables

```scss
/* Primary Colors */
--color-primary: #8F008A;        /* Purple - main brand color */
--color-primary-light: #A16EE7;  /* Lighter purple - hover states */
--color-primary-dark: #7F3486;   /* Darker purple - active states */

/* Status Colors */
--color-secondary: #13c9ca;      /* Cyan - secondary actions */
--color-success: #81ba00;        /* Green - success messages */
--color-warning: #ffbc58;        /* Orange - warnings */
--color-error: #db524b;          /* Red - errors */
--color-info: #00a8ff;           /* Blue - info messages */

/* Neutral Grays */
--neutral-50: #f8f9fa;    /* Lightest */
--neutral-100: #f1f3f5;
--neutral-200: #e9ecef;   /* Borders */
--neutral-300: #dee2e6;
--neutral-400: #ced4da;
--neutral-500: #adb5bd;   /* Placeholders */
--neutral-600: #6c757d;   /* Secondary text */
--neutral-700: #495057;   /* Labels */
--neutral-800: #343a40;
--neutral-900: #212529;   /* Primary text */
```

## Typography

### Font Families

```scss
/* Primary font (Lato) */
font-family: var(--font-primary);

/* Secondary font (Nunito) */
font-family: var(--font-secondary);

/* Code/Monospace */
font-family: var(--font-monospace);
```

### Font Sizes

```scss
/* Headings */
h1 { font-size: 2.25rem; }  /* 36px */
h2 { font-size: 1.875rem; } /* 30px */
h3 { font-size: 1.5rem; }   /* 24px */
h4 { font-size: 1.25rem; }  /* 20px */
h5 { font-size: 1.125rem; } /* 18px */
h6 { font-size: 1rem; }     /* 16px */

/* Body */
body { font-size: 14px; }
p { font-size: 14px; }
small { font-size: 12px; }
```

## Spacing System

**Use spacing variables for consistency:**

```scss
--spacing-1: 0.25rem;   /* 4px  - Tiny gaps */
--spacing-2: 0.5rem;    /* 8px  - Small gaps */
--spacing-3: 0.625rem;  /* 10px - Medium-small */
--spacing-4: 0.875rem;  /* 14px - Default spacing */
--spacing-6: 1.25rem;   /* 20px - Medium-large */
--spacing-8: 1.75rem;   /* 28px - Large gaps */
```

### Common Spacing Patterns

```scss
/* Form Groups */
.form-group {
  margin-bottom: var(--spacing-4);  /* 14px */
}

/* Card Sections */
.card-body {
  padding: var(--spacing-4);  /* 14px all around */
}

/* Section Margins */
.section {
  margin-bottom: var(--spacing-6);  /* 20px */
}

/* Button Spacing */
.btn {
  padding: var(--spacing-2) var(--spacing-4);  /* 8px 14px */
}
```

## Components

### Buttons

```html
<!-- Primary Button -->
<button class="btn btn-primary">Save</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Cancel</button>

<!-- Success Button -->
<button class="btn btn-success">Approve</button>

<!-- Danger Button -->
<button class="btn btn-danger">Delete</button>
```

```scss
/* Button Custom Styling */
.btn-custom {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: white;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
  
  &:focus {
    box-shadow: var(--shadow-focus);
  }
}
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h5>Card Title</h5>
  </div>
  <div class="card-body">
    <!-- Content -->
  </div>
</div>
```

```scss
/* Card Styling */
.card {
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-4);
}

.card-header {
  background-color: var(--neutral-50);
  border-bottom: 1px solid var(--neutral-200);
  padding: var(--spacing-3) var(--spacing-4);
}

.card-body {
  padding: var(--spacing-4);
}
```

### Form Elements

```html
<!-- Text Input -->
<div class="form-group">
  <label class="form-label">
    <span class="text-danger">*</span>
    Field Name
  </label>
  <input type="text" class="form-control" placeholder="Enter value">
  <small class="form-text text-muted">Help text here</small>
  <em class="error" *ngIf="hasError">Error message</em>
</div>
```

```scss
/* Form Styling */
.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-700);
  margin-bottom: var(--spacing-2);
  
  .text-danger {
    color: var(--color-error);
  }
}

.form-control {
  height: 2.5rem;
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--neutral-400);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  
  &:focus {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }
}

.error {
  display: block;
  margin-top: var(--spacing-1);
  font-size: 0.75rem;
  color: var(--color-error);
  
  &::before {
    content: "⚠ ";
  }
}
```

### Tables

```html
<table class="table table-striped">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

```scss
/* Table Styling */
.table {
  font-size: 13px;
  
  th {
    background-color: var(--neutral-50);
    color: var(--neutral-800);
    font-weight: 600;
    padding: var(--spacing-2);
    border-bottom: 2px solid var(--neutral-300);
  }
  
  td {
    padding: var(--spacing-2);
    border-bottom: 1px solid var(--neutral-200);
  }
  
  tr:hover {
    background-color: var(--neutral-50);
  }
}
```

### Modals/Dialogs

```scss
.modal-content {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.modal-header {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-4);
  border-bottom: none;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.modal-body {
  padding: var(--spacing-6);
}

.modal-footer {
  padding: var(--spacing-4);
  border-top: 1px solid var(--neutral-200);
}
```

## Layout Patterns

### Page Container

```html
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="page-header">
        <h2 class="page-title">Page Title</h2>
        <p class="page-subtitle">Description</p>
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-12">
      <!-- Main content -->
    </div>
  </div>
</div>
```

```scss
.page-header {
  margin-bottom: var(--spacing-4);
}

.page-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: var(--spacing-2);
}

.page-subtitle {
  font-size: 1rem;
  color: var(--neutral-600);
  margin: 0;
}
```

### Two-Column Layout

```html
<div class="row">
  <div class="col-md-6">
    <!-- Left column -->
  </div>
  <div class="col-md-6">
    <!-- Right column -->
  </div>
</div>
```

### Three-Column Dashboard

```html
<div class="row">
  <div class="col-lg-4 col-md-6">
    <div class="dashboard-widget">
      <!-- Widget 1 -->
    </div>
  </div>
  <div class="col-lg-4 col-md-6">
    <div class="dashboard-widget">
      <!-- Widget 2 -->
    </div>
  </div>
  <div class="col-lg-4 col-md-12">
    <div class="dashboard-widget">
      <!-- Widget 3 -->
    </div>
  </div>
</div>
```

## Icons

```html
<!-- Feather Icons -->
<app-feather-icons [icon]="'user'"></app-feather-icons>

<!-- Font Awesome -->
<i class="fa fa-save"></i>

<!-- With Colors -->
<i class="fa fa-check" style="color: var(--color-success);"></i>
<i class="fa fa-times" style="color: var(--color-error);"></i>
```

## States & Feedback

### Loading State

```html
<div class="loading-spinner">
  <div class="spinner"></div>
  <p>Loading...</p>
</div>
```

```scss
.loading-spinner {
  text-align: center;
  padding: var(--spacing-8);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--neutral-300);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto var(--spacing-4);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Empty State

```html
<div class="empty-state">
  <i class="fa fa-inbox fa-3x"></i>
  <h4>No Data Available</h4>
  <p>Add your first item to get started</p>
  <button class="btn btn-primary">Add Item</button>
</div>
```

```scss
.empty-state {
  text-align: center;
  padding: var(--spacing-8);
  color: var(--neutral-600);
  
  i {
    color: var(--neutral-400);
    margin-bottom: var(--spacing-4);
  }
}
```

### Error State

```html
<div class="error-message">
  <i class="fa fa-exclamation-triangle"></i>
  <span>An error occurred. Please try again.</span>
</div>
```

```scss
.error-message {
  background-color: rgba(219, 82, 75, 0.1);
  border-left: 4px solid var(--color-error);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  color: var(--color-error);
  
  i {
    margin-right: var(--spacing-2);
  }
}
```

### Success State

```html
<div class="success-message">
  <i class="fa fa-check-circle"></i>
  <span>Operation completed successfully!</span>
</div>
```

```scss
.success-message {
  background-color: rgba(129, 186, 0, 0.1);
  border-left: 4px solid var(--color-success);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  color: var(--color-success);
  
  i {
    margin-right: var(--spacing-2);
  }
}
```

## Responsive Design

### Breakpoints

```scss
/* Extra small devices (phones, less than 576px) */
@media (max-width: 575.98px) { }

/* Small devices (tablets, 576px and up) */
@media (min-width: 576px) { }

/* Medium devices (desktops, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (large desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (larger desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

### Mobile-First Approach

```scss
/* Base styles (mobile) */
.my-component {
  padding: var(--spacing-2);
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .my-component {
    padding: var(--spacing-4);
    font-size: 16px;
  }
}

/* Desktop and up */
@media (min-width: 992px) {
  .my-component {
    padding: var(--spacing-6);
  }
}
```

## Accessibility

### ARIA Labels

```html
<!-- Button with icon -->
<button aria-label="Delete item">
  <i class="fa fa-trash"></i>
</button>

<!-- Form field -->
<input 
  type="text"
  aria-label="Email address"
  aria-required="true"
  aria-describedby="email-help"
/>
<small id="email-help">Enter your email address</small>
```

### Focus States

```scss
/* Always include visible focus states */
.btn:focus,
.form-control:focus {
  outline: 0;
  box-shadow: var(--shadow-focus);
}

/* Keyboard-only focus (not mouse clicks) */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## Performance Tips

### Avoid Expensive Operations

```scss
/* ❌ Avoid - Expensive */
.box {
  box-shadow: 0 0 100px rgba(0,0,0,0.5);
  transform: translateZ(0) scale(1.1);
}

/* ✅ Better - Use predefined shadows */
.box {
  box-shadow: var(--shadow-md);
  transform: scale(1.05);
}
```

### Use CSS Variables for Theme Switching

```scss
/* ✅ Good - Easy to theme */
.component {
  background: var(--color-primary);
  color: var(--neutral-900);
}

/* ❌ Bad - Hard to theme */
.component {
  background: #8F008A;
  color: #212529;
}
```

## Common Patterns

### Hover Card

```scss
.hover-card {
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  transition: all var(--transition-base);
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--color-primary);
  }
}
```

### Badge/Pill

```scss
.badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  
  &.badge-primary {
    background-color: var(--color-primary);
    color: white;
  }
  
  &.badge-success {
    background-color: var(--color-success);
    color: white;
  }
}
```

### Divider

```scss
.divider {
  border: 0;
  border-top: 1px solid var(--neutral-200);
  margin: var(--spacing-4) 0;
}
```

## Checklist for New Components

Before submitting a new component, verify:

- [ ] Uses CSS variables for all colors
- [ ] Uses spacing variables for padding/margins
- [ ] Lato font family applied (via `var(--font-primary)`)
- [ ] Purple primary color (`var(--color-primary)`)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Accessible (ARIA labels, keyboard navigation)
- [ ] Focus states visible
- [ ] Hover states smooth
- [ ] No hardcoded colors or spacing values
- [ ] Follows 8px spacing grid
- [ ] Touch targets minimum 44x44px on mobile

## Quick Conversion Examples

### Before (Old Style)

```scss
.my-button {
  background: #1d6aa5;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 4px;
  font-family: sans-serif;
}

.my-button:hover {
  background: #144d7a;
}
```

### After (New Style)

```scss
.my-button {
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-2) var(--spacing-4);
  margin-bottom: var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  transition: all var(--transition-fast);
}

.my-button:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
```

---

**Remember**: Consistency is key! Use these patterns across all components for a unified, professional appearance.

For questions, refer to:
- `THEME_CONSISTENCY_UPDATE.md` - Theme alignment details
- `ENTERPRISE_UI_IMPLEMENTATION.md` - Overall implementation guide
- `design-tokens.ts` - All design token values

