import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { IndividualRoutingModule } from './individual-routing.module';
import {ListIndividualComponent} from './list-individual/list-individual.component';
import {ViewComponent} from './list-individual/list-individual.component';
import {AddIndividualComponent} from './add-individual/add-individual.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {TextMaskModule} from 'angular2-text-mask';
import {TagInputModule} from 'ngx-chips';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [ListIndividualComponent, AddIndividualComponent, ViewComponent],
    imports: [
        CommonModule,
        NgbModule,
        Ng2SmartTableModule,
        ReactiveFormsModule,
        IndividualRoutingModule,
        NgSelectModule,
        TextMaskModule,
        TagInputModule,
        FormsModule,
        AngularMyDatePickerModule,
        SharedModule
    ]
})
export class IndividualModule { }
