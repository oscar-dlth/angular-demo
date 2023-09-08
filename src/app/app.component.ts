import { Component, ViewChild } from '@angular/core';
import { SideNavigationBarComponent } from './UI/layout/side-navigation-bar/side-navigation-bar.component';
import { LayoutFacadeService } from './UI/layout/facade/layout-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public layoutFacade: LayoutFacadeService){

  }
}
