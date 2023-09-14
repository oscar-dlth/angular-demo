import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToogleButtonComponent } from './components/toogle-button/toogle-button.component';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    ToogleButtonComponent
  ],
  imports: [
    RouterModule,
    LayoutModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    ToogleButtonComponent
  ]
})
export class SharedModule { }
