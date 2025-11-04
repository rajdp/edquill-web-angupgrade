import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../service/newsubject.service";
export class CustomDateFormatPipe {
    constructor(datePipe, newSubject) {
        this.datePipe = datePipe;
        this.newSubject = newSubject;
        this.DEFAULT_DATE_FORMAT = 'medium';
        this.DEFAULT_DATE_FORMAT = 'medium';
        this.newSubject.globalDateFormat.subscribe((value) => {
            this.DEFAULT_DATE_FORMAT = value;
        });
    }
    transform(value, args) {
        // Handle null, undefined, empty string, or invalid dates
        if (!value || value === '' || value === '0000-00-00' || value === '0000-00-00 00:00:00') {
            return '';
        }
        // Check if the value can be converted to a valid date
        const dateValue = new Date(value);
        if (isNaN(dateValue.getTime())) {
            // Invalid date - return empty string instead of crashing
            return '';
        }
        const format = this.newSubject.dateFormat.value ? this.newSubject.dateFormat.value : localStorage.getItem('currentFormat');
        return this.datePipe.transform(value, format);
    }
    static { this.ɵfac = function CustomDateFormatPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CustomDateFormatPipe)(i0.ɵɵdirectiveInject(i1.DatePipe, 16), i0.ɵɵdirectiveInject(i2.NewsubjectService, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "customDateFormat", type: CustomDateFormatPipe, pure: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomDateFormatPipe, [{
        type: Pipe,
        args: [{
                name: 'customDateFormat',
                pure: false
            }]
    }], () => [{ type: i1.DatePipe }, { type: i2.NewsubjectService }], null); })();
//# sourceMappingURL=custom-date-format.pipe.js.map