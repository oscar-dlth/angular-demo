import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }