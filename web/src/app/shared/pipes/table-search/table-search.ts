import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tableSearch', pure: false })
export class TableSearch implements PipeTransform {
    transform(tableHeaderArray: any, tableData: any): any {
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
}
