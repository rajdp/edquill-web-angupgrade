import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { dateOptions } from '../data/config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ValidationService {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    // form Validation
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
    nameValidate(event) {
        if (event.charCode !== 0) {
            const pattern = /[a-zA-Z ]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    titleCaseValidate(event) {
        if (event.charCode !== 0) {
            const inputChar = String.fromCharCode(event.charCode);
            const inputValue = event.target.value;
            const result = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        }
    }
    numberValidate(event) {
        if (event.charCode !== 0) {
            const pattern = /[0-9.!@#$%^&*()_+-?<>,]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    numberValidate1(event) {
        if (event.charCode !== 0) {
            const pattern = /[0-9.!@#$%^&*()_+-?<>,]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    dateValidation(event) {
        if (event.charCode !== 0) {
            const pattern = /[0-9-]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    idValidate(event) {
        if (event.charCode !== 0) {
            const pattern = /[a-zA-Z0-9 ]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    numberOnlyValidate(event) {
        if (event.charCode !== 0) {
            const pattern = /[0-9]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
    }
    disableEndDateCondition(startDateFormControl, endDateFormControl, formGroup) {
        const startDate = formGroup.controls[startDateFormControl].value ?? '';
        if (startDate == '') {
            formGroup.controls[endDateFormControl].disable({ onlySelf: true });
        }
        else {
            formGroup.controls[endDateFormControl].enable({ onlySelf: true });
        }
        return startDate == '';
    }
    validateEndDate(event, endDateFormcontrol, formGroup) {
        console.log(endDateFormcontrol, 'enDDtae');
        if (formGroup.controls[endDateFormcontrol].value != '') {
            const formattedDate1 = this.datePipe.transform(event.singleDate.jsDate, 'yyyy-MM-dd');
            const formattedDate2 = this.datePipe.transform(formGroup.controls[endDateFormcontrol].value.singleDate.jsDate, 'yyyy-MM-dd');
            if (formattedDate1 > formattedDate2) {
                formGroup.controls[endDateFormcontrol].patchValue('');
            }
        }
        return {
            dateRange: false,
            firstDayOfWeek: 'su',
            dateFormat: dateOptions.pickerFormat,
            disableUntil: {
                year: event.singleDate.date.year,
                month: event.singleDate.date.month,
                day: event.singleDate.date.day == 1 ? -1 : event.singleDate.date.day - 1
            },
            calendarAnimation: {
                in: 4,
                out: 4
            }
        };
    }
    static { this.ɵfac = function ValidationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ValidationService)(i0.ɵɵinject(i1.DatePipe)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ValidationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.DatePipe }], null); })();
//# sourceMappingURL=validation.service.js.map