import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortingPipe} from './sorting/sorting.pipe';
import {SanitizeHtmlPipe} from './sanitizer/SanitizeHtmlPipe.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SortingPipe,
        SanitizeHtmlPipe
    ],
    exports: [
        SortingPipe,
        SanitizeHtmlPipe
    ]
})
export class PipesModule { }
