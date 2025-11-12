import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelfRegistrationComponent } from './self-registration.component';

@NgModule({
  declarations: [SelfRegistrationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgSelectModule],
  exports: [SelfRegistrationComponent]
})
export class SelfRegistrationModule {}
