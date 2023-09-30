import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SideNavigationFacadeService } from '../../components/side-navigation-bar/facade/side-navigation-facade.service';
import { ResponsiveService } from '../../modules/core/services/responsive.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor(public sideNavigationFacade: SideNavigationFacadeService, public responsiveService: ResponsiveService){

  }

  ngOnInit(): void {

  }

  get isCollapsed$() {
    return this.sideNavigationFacade.isSideNavigationBarCollapsed$;
  }

  get isSideNavCollapsed() : Observable<Boolean>{
    return this.sideNavigationFacade.isSideNavigationBarCollapsed$;
  }

}
