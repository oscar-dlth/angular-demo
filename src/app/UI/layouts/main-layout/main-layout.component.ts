import { Component, OnInit } from '@angular/core';
import { SideNavigationFacadeService } from '../../side-navigation-bar/facade/side-navigation-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor(public sideNavigationFacade: SideNavigationFacadeService){

  }

  ngOnInit(): void {

  }

  get isSideNavCollapsed() : Observable<Boolean>{
    return this.sideNavigationFacade.isSideNavigationBarCollapsed$;
  }

}
