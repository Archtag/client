import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatedRoutingModule } from './validated.routing.module';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    ValidatedRoutingModule
  ]
})
export class ValidatedModule { }
