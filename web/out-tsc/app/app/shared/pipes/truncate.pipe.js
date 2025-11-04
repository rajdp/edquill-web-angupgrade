import { inject, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export class TruncateHtmlPipe {
    constructor() {
        this.sanitizer = inject(DomSanitizer);
    }
    transform(value, limit = 50, trail = '...') {
        if (!value)
            return this.sanitizer.bypassSecurityTrustHtml('-');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = value;
        const textContent = tempDiv.textContent || tempDiv.innerText || '';
        const truncatedText = textContent.trim().length > limit ? textContent.trim().substring(0, limit) + trail : textContent.trim();
        return this.sanitizer.bypassSecurityTrustHtml(truncatedText);
    }
    static { this.ɵfac = function TruncateHtmlPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TruncateHtmlPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "truncateHtml", type: TruncateHtmlPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TruncateHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'truncateHtml'
            }]
    }], null, null); })();
//# sourceMappingURL=truncate.pipe.js.map