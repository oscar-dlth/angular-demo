import { Component, ViewChild } from '@angular/core';
import { SideNavigationBarComponent } from './UI/side-navigation-bar/side-navigation-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @ViewChild('sideNavComponent')
  sideBar!: SideNavigationBarComponent;

  title = 'Movies front';

  toogleSideBar(){
    this.sideBar.collapseToggle();
  }
}
