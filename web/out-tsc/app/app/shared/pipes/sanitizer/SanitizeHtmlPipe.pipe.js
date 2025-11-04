import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(v) {
        // this.clickEvent();
        return this._sanitizer.bypassSecurityTrustHtml(v);
    }
    static { this.ɵfac = function SanitizeHtmlPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SanitizeHtmlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SanitizeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'sanitizeHtml'
            }]
    }], () => [{ type: i1.DomSanitizer }], null); })();
//# sourceMappingURL=SanitizeHtmlPipe.pipe.js.map