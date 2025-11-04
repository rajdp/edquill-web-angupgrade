import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SortingPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.sort((a, b) => a.rect.y2 - b.rect.y2);
        }
    }
    static { this.ɵfac = function SortingPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SortingPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "sortPipe", type: SortingPipe, pure: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortingPipe, [{
        type: Pipe,
        args: [{ name: 'sortPipe', pure: false }]
    }], null, null); })();
//# sourceMappingURL=sorting.pipe.js.map