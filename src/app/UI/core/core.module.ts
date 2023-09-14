import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from './services/responsive.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    ResponsiveService
  ]
})
export class CoreModule { }
