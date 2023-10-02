import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from './services/responsive.service';
import { ThemeService } from './services/theme.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './state/reducers/theme-reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('isDarkTheme', themeReducer )
  ],
  exports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    ResponsiveService,
    ThemeService,
  ]
})
export class CoreModule { }
