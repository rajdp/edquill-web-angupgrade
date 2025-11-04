import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TableSearch {
    transform(tableHeaderArray, tableData) {
        let arrayValue = [];
        arrayValue = tableData;
        tableHeaderArray.forEach((items) => {
            if (items.SearchValue == '') {
                return false;
            }
            let existingArray = [];
            existingArray = arrayValue.filter((topic) => {
                const value = topic[items.ApiKey];
                return value != null && value != undefined &&
                    String(value).toLowerCase().includes(items.SearchValue.toLowerCase());
            });
            arrayValue = existingArray;
        });
        return arrayValue;
    }
    static { this.ɵfac = function TableSearch_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TableSearch)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "tableSearch", type: TableSearch, pure: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableSearch, [{
        type: Pipe,
        args: [{ name: 'tableSearch', pure: false }]
    }], null, null); })();
//# sourceMappingURL=table-search.js.map