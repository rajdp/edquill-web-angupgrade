import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {ListHomeComponent} from './list-home/list-home.component';
import {AddHomeComponent} from './add-home/add-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CorporateschoolModule} from '../corporateschool/corporateschool.module';


@NgModule({
  declarations: [ListHomeComponent, AddHomeComponent],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        FormsModule,
        CorporateschoolModule
    ]
})
export class HomeModule { }
