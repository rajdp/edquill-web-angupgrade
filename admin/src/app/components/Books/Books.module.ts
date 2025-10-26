import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BooksRoutingModule } from './Books-routing.module';
import {ListBooksComponent} from './list-Books/list-Books.component';
import {ViewComponent} from './list-Books/list-Books.component';
import {AddBooksComponent} from './add-Books/add-Books.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {TagInputModule} from 'ngx-chips';


@NgModule({
    declarations: [ListBooksComponent, AddBooksComponent, ViewComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        BooksRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        PdfViewerModule,
        TagInputModule,
    ]
})
export class BooksModule { }
