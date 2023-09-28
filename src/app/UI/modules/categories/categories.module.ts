import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
