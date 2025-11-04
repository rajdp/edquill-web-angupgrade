import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/terminology.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@ng-select/ng-select";
import * as i5 from "./form-section.component";
function ContactInfoGroupComponent_em_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("email"), " ");
} }
function ContactInfoGroupComponent_em_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getValidationMessage("email"), " ");
} }
function ContactInfoGroupComponent_h6_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 12);
    i0.ɵɵtext(1, "Address Information");
    i0.ɵɵelementEnd();
} }
function ContactInfoGroupComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 4)(2, "label", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 4)(6, "label", 5);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "label", 5);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 3)(16, "div", 4)(17, "label", 5);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 2)(21, "div", 3)(22, "div", 4)(23, "label", 5);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "ng-select", 14);
    i0.ɵɵlistener("change", function ContactInfoGroupComponent_div_27_Template_ng_select_change_25_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onCountryChange($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 3)(27, "div", 4)(28, "label", 5);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "ng-select", 15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", ctx_r0.addressPrefix + "1");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel(ctx_r0.addressPrefix + "1"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.addressPrefix + "1")("formControlName", ctx_r0.addressPrefix + "1")("placeholder", ctx_r0.terminology.getPlaceholder("address1"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", ctx_r0.addressPrefix + "2");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel(ctx_r0.addressPrefix + "2"), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.addressPrefix + "2")("formControlName", ctx_r0.addressPrefix + "2")("placeholder", ctx_r0.terminology.getPlaceholder("address2"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("for", ctx_r0.cityField);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel(ctx_r0.cityField), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.cityField)("formControlName", ctx_r0.cityField)("placeholder", ctx_r0.terminology.getPlaceholder("city"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("for", ctx_r0.postalCodeField);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel(ctx_r0.postalCodeField), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.postalCodeField)("formControlName", ctx_r0.postalCodeField)("placeholder", ctx_r0.terminology.getPlaceholder("postalCode"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("for", ctx_r0.countryField);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel(ctx_r0.countryField), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.countryField)("items", ctx_r0.countryList)("formControlName", ctx_r0.countryField);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("for", ctx_r0.stateField);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.terminology.getFieldLabel(ctx_r0.stateField), " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.stateField)("items", ctx_r0.stateList)("formControlName", ctx_r0.stateField);
} }
/**
 * Contact Info Group Component
 * Reusable contact person information form group
 * Replaces the old "Parent" sections with modern "Contact" terminology
 */
export class ContactInfoGroupComponent {
    constructor(terminology) {
        this.terminology = terminology;
        this.contactNumber = 1;
        this.countryList = [];
        this.stateList = [];
        this.onCountryChange = () => { };
        this.collapsible = false;
        this.startCollapsed = false;
        this.showAddress = true; // New input to control address visibility
        this.contactPrefix = '';
        this.contactSuffix = '';
        this.addressPrefix = '';
        this.cityField = '';
        this.stateField = '';
        this.countryField = '';
        this.postalCodeField = '';
        this.sectionTitle = '';
        this.sectionSubtitle = '';
    }
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
        }
        else {
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
    static { this.ɵfac = function ContactInfoGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContactInfoGroupComponent)(i0.ɵɵdirectiveInject(i1.TerminologyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactInfoGroupComponent, selectors: [["app-contact-info-group"]], inputs: { formGroup: "formGroup", contactNumber: "contactNumber", countryList: "countryList", stateList: "stateList", onCountryChange: "onCountryChange", collapsible: "collapsible", startCollapsed: "startCollapsed", showAddress: "showAddress" }, decls: 28, vars: 29, consts: [[3, "title", "subtitle", "collapsible", "startCollapsed"], [1, "contact-info-content", 3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], [1, "form-label", 3, "for"], ["type", "text", 1, "form-control", 3, "id", "formControlName", "placeholder"], ["type", "email", 1, "form-control", 3, "id", "formControlName", "placeholder"], ["class", "error", 4, "ngIf"], ["class", "subsection-title mt-4 mb-3", 4, "ngIf"], [4, "ngIf"], [1, "error"], [1, "subsection-title", "mt-4", "mb-3"], ["type", "text", "maxlength", "10", 1, "form-control", 3, "id", "formControlName", "placeholder"], ["bindLabel", "name", "bindValue", "country_id", "placeholder", "Select Country", 3, "change", "id", "items", "formControlName"], ["bindLabel", "name", "bindValue", "state_id", "placeholder", "Select State", 3, "id", "items", "formControlName"]], template: function ContactInfoGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-form-section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 3)(9, "div", 4)(10, "label", 5);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "label", 5);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 7);
            i0.ɵɵtemplate(19, ContactInfoGroupComponent_em_19_Template, 2, 1, "em", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 3)(21, "div", 4)(22, "label", 5);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 7);
            i0.ɵɵtemplate(25, ContactInfoGroupComponent_em_25_Template, 2, 1, "em", 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(26, ContactInfoGroupComponent_h6_26_Template, 2, 0, "h6", 9)(27, ContactInfoGroupComponent_div_27_Template, 31, 30, "div", 10);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_20_0;
            let tmp_26_0;
            i0.ɵɵproperty("title", ctx.sectionTitle)("subtitle", ctx.sectionSubtitle)("collapsible", ctx.collapsible)("startCollapsed", ctx.startCollapsed);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.formGroup);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("for", ctx.contactPrefix + "FirstName");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.terminology.getFieldLabel(ctx.contactPrefix + "FirstName"), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.contactPrefix + "FirstName")("formControlName", ctx.contactPrefix + "FirstName")("placeholder", ctx.terminology.getPlaceholder("first_name"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("for", ctx.contactPrefix + "LastName");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.terminology.getFieldLabel(ctx.contactPrefix + "LastName"), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", ctx.contactPrefix + "LastName")("formControlName", ctx.contactPrefix + "LastName")("placeholder", ctx.terminology.getPlaceholder("last_name"));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("for", "email_id1_" + ctx.contactSuffix);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.terminology.getFieldLabel("email_id1_" + ctx.contactSuffix), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", "email_id1_" + ctx.contactSuffix)("formControlName", "email_id1_" + ctx.contactSuffix)("placeholder", ctx.terminology.getPlaceholder("email_id"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (tmp_20_0 = ctx.formGroup.get("email_id1_" + ctx.contactSuffix)) == null ? null : tmp_20_0.hasError("pattern"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("for", "email_id2_" + ctx.contactSuffix);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.terminology.getFieldLabel("email_id2_" + ctx.contactSuffix), " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("id", "email_id2_" + ctx.contactSuffix)("formControlName", "email_id2_" + ctx.contactSuffix)("placeholder", ctx.terminology.getPlaceholder("email_id"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (tmp_26_0 = ctx.formGroup.get("email_id2_" + ctx.contactSuffix)) == null ? null : tmp_26_0.hasError("pattern"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showAddress);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showAddress);
        } }, dependencies: [i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.MaxLengthValidator, i3.FormGroupDirective, i3.FormControlName, i4.NgSelectComponent, i5.FormSectionComponent], styles: [".contact-info-content[_ngcontent-%COMP%] {\n      padding-top: var(--spacing-2);\n    }\n    \n    .subsection-title[_ngcontent-%COMP%] {\n      font-size: 1rem;\n      font-weight: 600;\n      color: var(--neutral-800);\n      padding-bottom: var(--spacing-2);\n      border-bottom: 1px solid var(--neutral-200);\n    }\n    \n    .form-group[_ngcontent-%COMP%] {\n      margin-bottom: var(--spacing-4);\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactInfoGroupComponent, [{
        type: Component,
        args: [{ selector: 'app-contact-info-group', template: `
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
  `, styles: ["\n    .contact-info-content {\n      padding-top: var(--spacing-2);\n    }\n    \n    .subsection-title {\n      font-size: 1rem;\n      font-weight: 600;\n      color: var(--neutral-800);\n      padding-bottom: var(--spacing-2);\n      border-bottom: 1px solid var(--neutral-200);\n    }\n    \n    .form-group {\n      margin-bottom: var(--spacing-4);\n    }\n  "] }]
    }], () => [{ type: i1.TerminologyService }], { formGroup: [{
            type: Input
        }], contactNumber: [{
            type: Input
        }], countryList: [{
            type: Input
        }], stateList: [{
            type: Input
        }], onCountryChange: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], startCollapsed: [{
            type: Input
        }], showAddress: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContactInfoGroupComponent, { className: "ContactInfoGroupComponent" }); })();
//# sourceMappingURL=contact-info-group.component.js.map