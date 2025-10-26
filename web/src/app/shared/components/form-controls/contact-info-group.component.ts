import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TerminologyService } from '../../services/terminology.service';

/**
 * Contact Info Group Component
 * Reusable contact person information form group
 * Replaces the old "Parent" sections with modern "Contact" terminology
 */
@Component({
  selector: 'app-contact-info-group',
  template: `
    <app-form-section 
      [title]="sectionTitle" 
      [subtitle]="sectionSubtitle"
      [collapsible]="collapsible"
      [startCollapsed]="startCollapsed">
      
      <div [formGroup]="formGroup" class="contact-info-content">
        <!-- Name Fields Row -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label [for]="contactPrefix + 'FirstName'" class="form-label">
                {{ terminology.getFieldLabel(contactPrefix + 'FirstName') }}
              </label>
              <input
                [id]="contactPrefix + 'FirstName'"
                [formControlName]="contactPrefix + 'FirstName'"
                type="text"
                class="form-control"
                [placeholder]="terminology.getPlaceholder('first_name')"
              />
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="form-group">
              <label [for]="contactPrefix + 'LastName'" class="form-label">
                {{ terminology.getFieldLabel(contactPrefix + 'LastName') }}
              </label>
              <input
                [id]="contactPrefix + 'LastName'"
                [formControlName]="contactPrefix + 'LastName'"
                type="text"
                class="form-control"
                [placeholder]="terminology.getPlaceholder('last_name')"
              />
            </div>
          </div>
        </div>

        <!-- Email Fields Row -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label [for]="'email_id1_' + contactSuffix" class="form-label">
                {{ terminology.getFieldLabel('email_id1_' + contactSuffix) }}
              </label>
              <input
                [id]="'email_id1_' + contactSuffix"
                [formControlName]="'email_id1_' + contactSuffix"
                type="email"
                class="form-control"
                [placeholder]="terminology.getPlaceholder('email_id')"
              />
              <em *ngIf="formGroup.get('email_id1_' + contactSuffix)?.hasError('pattern')" class="error">
                {{ terminology.getValidationMessage('email') }}
              </em>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="form-group">
              <label [for]="'email_id2_' + contactSuffix" class="form-label">
                {{ terminology.getFieldLabel('email_id2_' + contactSuffix) }}
              </label>
              <input
                [id]="'email_id2_' + contactSuffix"
                [formControlName]="'email_id2_' + contactSuffix"
                type="email"
                class="form-control"
                [placeholder]="terminology.getPlaceholder('email_id')"
              />
              <em *ngIf="formGroup.get('email_id2_' + contactSuffix)?.hasError('pattern')" class="error">
                {{ terminology.getValidationMessage('email') }}
              </em>
            </div>
          </div>
        </div>

        <!-- Address Section - Only show if enabled -->
        <h6 *ngIf="showAddress" class="subsection-title mt-4 mb-3">Address Information</h6>
        
        <div *ngIf="showAddress">
          <div class="form-group">
            <label [for]="addressPrefix + '1'" class="form-label">
              {{ terminology.getFieldLabel(addressPrefix + '1') }}
            </label>
            <input
              [id]="addressPrefix + '1'"
              [formControlName]="addressPrefix + '1'"
              type="text"
              class="form-control"
              [placeholder]="terminology.getPlaceholder('address1')"
            />
          </div>

          <div class="form-group">
            <label [for]="addressPrefix + '2'" class="form-label">
              {{ terminology.getFieldLabel(addressPrefix + '2') }}
            </label>
            <input
              [id]="addressPrefix + '2'"
              [formControlName]="addressPrefix + '2'"
              type="text"
              class="form-control"
              [placeholder]="terminology.getPlaceholder('address2')"
            />
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label [for]="cityField" class="form-label">
                  {{ terminology.getFieldLabel(cityField) }}
                </label>
                <input
                  [id]="cityField"
                  [formControlName]="cityField"
                  type="text"
                  class="form-control"
                  [placeholder]="terminology.getPlaceholder('city')"
                />
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label [for]="postalCodeField" class="form-label">
                  {{ terminology.getFieldLabel(postalCodeField) }}
                </label>
                <input
                  [id]="postalCodeField"
                  [formControlName]="postalCodeField"
                  type="text"
                  class="form-control"
                  [placeholder]="terminology.getPlaceholder('postalCode')"
                  maxlength="10"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label [for]="countryField" class="form-label">
                  {{ terminology.getFieldLabel(countryField) }}
                </label>
                <ng-select
                  [id]="countryField"
                  [items]="countryList"
                  bindLabel="name"
                  bindValue="country_id"
                  [formControlName]="countryField"
                  placeholder="Select Country"
                  (change)="onCountryChange($event)">
                </ng-select>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label [for]="stateField" class="form-label">
                  {{ terminology.getFieldLabel(stateField) }}
                </label>
                <ng-select
                  [id]="stateField"
                  [items]="stateList"
                  bindLabel="name"
                  bindValue="state_id"
                  [formControlName]="stateField"
                  placeholder="Select State">
                </ng-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-form-section>
  `,
  styles: [`
    .contact-info-content {
      padding-top: var(--spacing-2);
    }
    
    .subsection-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--neutral-800);
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid var(--neutral-200);
    }
    
    .form-group {
      margin-bottom: var(--spacing-4);
    }
  `]
})
export class ContactInfoGroupComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() contactNumber: 1 | 2 = 1;
  @Input() countryList: any[] = [];
  @Input() stateList: any[] = [];
  @Input() onCountryChange: (event: any) => void = () => {};
  @Input() collapsible: boolean = false;
  @Input() startCollapsed: boolean = false;
  @Input() showAddress: boolean = true;  // New input to control address visibility

  contactPrefix: string = '';
  contactSuffix: string = '';
  addressPrefix: string = '';
  cityField: string = '';
  stateField: string = '';
  countryField: string = '';
  postalCodeField: string = '';
  sectionTitle: string = '';
  sectionSubtitle: string = '';

  constructor(public terminology: TerminologyService) {}

  ngOnInit() {
    if (this.contactNumber === 1) {
      this.contactPrefix = 'parent1';
      this.contactSuffix = 'p1';
      this.addressPrefix = 'address';
      this.cityField = 'city';
      this.stateField = 'state';
      this.countryField = 'country';
      this.postalCodeField = 'postalCode';
      this.sectionTitle = this.terminology.getContactLabel(1, 'label');
      this.sectionSubtitle = this.terminology.getHelpText('contact1');
    } else {
      this.contactPrefix = 'parent2';
      this.contactSuffix = 'p2';
      this.addressPrefix = 'addressp2';
      this.cityField = 'city1';
      this.stateField = 'state1';
      this.countryField = 'country1';
      this.postalCodeField = 'postalCode1';
      this.sectionTitle = this.terminology.getContactLabel(2, 'label');
      this.sectionSubtitle = this.terminology.getHelpText('contact2');
    }
  }
}

