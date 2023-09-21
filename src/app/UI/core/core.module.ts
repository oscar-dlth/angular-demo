import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from './services/responsive.service';
import { ThemeService } from './services/theme.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ResponsiveService,
    ThemeService
  ]
})
export class CoreModule { }
