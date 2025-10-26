import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SortingPipe} from './sorting/sorting.pipe';
import {SanitizeHtmlPipe} from './sanitizer/SanitizeHtmlPipe.pipe';
import { CustomDateFormatPipe } from './custom-date-format.pipe';
import {TableSearch} from './table-search/table-search';
import {TruncateHtmlPipe} from './truncate.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SortingPipe,
        SanitizeHtmlPipe,
        TableSearch,
        CustomDateFormatPipe,
        TruncateHtmlPipe
    ],
    exports: [
        SortingPipe,
        SanitizeHtmlPipe,
        CustomDateFormatPipe,
        TruncateHtmlPipe
    ]
})
export class PipesModule { }
