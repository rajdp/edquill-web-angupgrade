import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CorporatesRoutingModule } from './corporates-routing.module';
import {ListCorporatesComponent} from './list-corporates/list-corporates.component';
import {AddCorporatesComponent} from './add-corporates/add-corporates.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {TagInputModule} from 'ngx-chips';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [ListCorporatesComponent, AddCorporatesComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        CorporatesRoutingModule,
        NgSelectModule,
        AngularMyDatePickerModule,
        TagInputModule,
        FormsModule,
        SharedModule
    ]
})
export class CorporatesModule { }
