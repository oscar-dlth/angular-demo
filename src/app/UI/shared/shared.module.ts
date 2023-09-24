import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToogleButtonComponent } from './components/toogle-button/toogle-button.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    ToogleButtonComponent,
    ButtonIconComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    RouterModule,
    LayoutModule,
    CommonModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    ToogleButtonComponent,
    ButtonIconComponent,
    TableComponent,
    CardComponent
  ]
})
export class SharedModule { }
