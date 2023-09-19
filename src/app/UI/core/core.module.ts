import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from './services/responsive.service';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    ResponsiveService,
    ThemeService
  ]
})
export class CoreModule { }
