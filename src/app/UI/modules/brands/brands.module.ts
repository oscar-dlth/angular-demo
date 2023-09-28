import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BrandsComponent } from './brands/brands.component';


@NgModule({
  declarations: [
    BrandsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
