import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Terminology Service
 * Provides abstraction layer for user-facing terminology
 * Maps backend field names to modern, inclusive language
 * Main use: "Parent" → "Contact" for all age groups
 */
export class TerminologyService {
    constructor() {
        this.terminology = {
            // Contact-related terms (replacing "Parent")
            parent: {
                singular: 'Contact',
                plural: 'Contacts',
                possessive: 'Contact\'s'
            },
            parent1: {
                label: 'Primary Contact',
                short: 'Contact 1',
                description: 'Primary contact person for this student'
            },
            parent2: {
                label: 'Secondary Contact',
                short: 'Contact 2',
                description: 'Secondary or emergency contact person (optional)'
            },
            // Student-related terms
            student: {
                singular: 'Student',
                plural: 'Students',
                possessive: 'Student\'s',
                learner: 'Learner' // Alternative term
            },
            // Field labels
            fields: {
                // Student fields
                first_name: 'First Name',
                last_name: 'Last Name',
                email_id: 'Email Address',
                gender: 'Gender',
                dob: 'Date of Birth',
                grade: 'Grade Level',
                studentId: 'Student ID',
                mobile: 'Primary Phone',
                mobile1: 'Secondary Phone',
                mobile2: 'Additional Phone',
                status: 'Status',
                registration_date: 'Registration Date',
                dropped_date: 'End Date',
                profile_photo: 'Profile Photo',
                // Contact 1 fields (formerly Parent 1)
                parent1FirstName: 'First Name',
                parent1LastName: 'Last Name',
                email_id1_p1: 'Primary Email',
                email_id2_p1: 'Secondary Email',
                address1: 'Address Line 1',
                address2: 'Address Line 2',
                city: 'City',
                state: 'State / Province',
                country: 'Country',
                postalCode: 'ZIP / Postal Code',
                // Contact 2 fields (formerly Parent 2)
                parent2FirstName: 'First Name',
                parent2LastName: 'Last Name',
                email_id1_p2: 'Primary Email',
                email_id2_p2: 'Secondary Email',
                addressp21: 'Address Line 1',
                addressp22: 'Address Line 2',
                city1: 'City',
                state1: 'State / Province',
                country1: 'Country',
                postalCode1: 'ZIP / Postal Code',
                // Common fields
                batchname: 'Batch',
                schoolId: 'School'
            },
            // Placeholders
            placeholders: {
                first_name: 'Enter first name',
                last_name: 'Enter last name',
                email_id: 'example@email.com',
                studentId: 'Enter student ID',
                mobile: 'Enter phone number',
                address1: 'Street address',
                address2: 'Apartment, suite, etc. (optional)',
                city: 'Enter city',
                postalCode: 'Enter ZIP/postal code'
            },
            // Help text
            helpText: {
                email_id: 'This will be used for login and communications',
                studentId: 'Optional: Your internal student identification number',
                mobile: 'Include country code if international',
                registration_date: 'Date the student enrolled',
                dropped_date: 'Date the student left or will leave',
                profile_photo: 'Accepted formats: JPG, PNG (max 5MB)',
                contact1: 'Primary contact will receive all important notifications and mail',
                contact2: 'Secondary contact for emergency situations (name and email only)'
            },
            // Validation messages
            validation: {
                required: '{field} is required',
                email: 'Please enter a valid email address',
                phone: 'Please enter a valid phone number',
                minLength: '{field} must be at least {min} characters',
                maxLength: '{field} cannot exceed {max} characters',
                pattern: '{field} format is invalid',
                unique: 'This {field} is already in use'
            },
            // Section headers
            sections: {
                personalInfo: 'Personal Information',
                contactInfo: 'Contact Information',
                primaryContact: 'Primary Contact Details',
                secondaryContact: 'Secondary Contact Details',
                addressInfo: 'Address Information',
                additionalInfo: 'Additional Information',
                academicInfo: 'Academic Information'
            },
            // Button labels
            buttons: {
                save: 'Save',
                saveAndContinue: 'Save & Continue',
                saveDraft: 'Save Draft',
                cancel: 'Cancel',
                back: 'Back',
                edit: 'Edit',
                delete: 'Delete',
                update: 'Update',
                add: 'Add',
                addStudent: 'Add Student',
                addContact: 'Add Contact',
                upload: 'Upload',
                remove: 'Remove',
                search: 'Search',
                filter: 'Filter',
                export: 'Export',
                import: 'Import'
            },
            // Status values
            status: {
                1: 'Active',
                2: 'Suspended',
                3: 'Inactive',
                4: 'Deleted'
            },
            // Gender options
            gender: {
                male: 'Male',
                female: 'Female',
                'n/a': 'Prefer not to say',
                other: 'Other'
            }
        };
    }
    /**
     * Get a terminology value by path
     * @param path Dot-notated path (e.g., 'parent1.label', 'fields.first_name')
     * @returns The terminology string or the path if not found
     */
    get(path) {
        const value = path.split('.').reduce((obj, key) => obj?.[key], this.terminology);
        return value || path;
    }
    /**
     * Get field label
     */
    getFieldLabel(fieldName) {
        return this.terminology.fields[fieldName] || fieldName;
    }
    /**
     * Get field placeholder
     */
    getPlaceholder(fieldName) {
        return this.terminology.placeholders[fieldName] || '';
    }
    /**
     * Get help text
     */
    getHelpText(fieldName) {
        return this.terminology.helpText[fieldName] || '';
    }
    /**
     * Get validation message with interpolation
     */
    getValidationMessage(type, params) {
        let message = this.terminology.validation[type] || 'Validation error';
        if (params) {
            Object.keys(params).forEach(key => {
                message = message.replace(`{${key}}`, String(params[key]));
            });
        }
        return message;
    }
    /**
     * Get section header
     */
    getSectionHeader(section) {
        return this.terminology.sections[section] || section;
    }
    /**
     * Get button label
     */
    getButtonLabel(button) {
        return this.terminology.buttons[button] || button;
    }
    /**
     * Get status label
     */
    getStatusLabel(statusValue) {
        return this.terminology.status[statusValue] || String(statusValue);
    }
    /**
     * Get gender label
     */
    getGenderLabel(genderValue) {
        return this.terminology.gender[genderValue] || genderValue;
    }
    /**
     * Get contact type label
     */
    getContactLabel(contactNumber, format = 'label') {
        const key = contactNumber === 1 ? 'parent1' : 'parent2';
        return this.terminology[key][format];
    }
    /**
     * Check if a field is required based on field name
     * This can be expanded to include business logic
     */
    isFieldRequired(fieldName) {
        const requiredFields = [
            'first_name',
            'last_name',
            'email_id',
            'grade',
            'status'
        ];
        return requiredFields.includes(fieldName);
    }
    /**
     * Get all field labels for a form section
     */
    getFormLabels(section) {
        const labels = {};
        Object.keys(this.terminology.fields).forEach(key => {
            if (section === 'student' && !key.includes('parent')) {
                labels[key] = this.terminology.fields[key];
            }
            else if (section === 'contact1' && (key.includes('parent1') || key.includes('p1') || ['address1', 'address2', 'city', 'state', 'country', 'postalCode'].includes(key))) {
                labels[key] = this.terminology.fields[key];
            }
            else if (section === 'contact2' && (key.includes('parent2') || key.includes('p2') || key.includes('1'))) {
                labels[key] = this.terminology.fields[key];
            }
        });
        return labels;
    }
    static { this.ɵfac = function TerminologyService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TerminologyService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TerminologyService, factory: TerminologyService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TerminologyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=terminology.service.js.map