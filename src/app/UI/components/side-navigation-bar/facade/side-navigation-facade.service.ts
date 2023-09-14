import { Injectable } from '@angular/core';
import { SideNavigationStateService } from '../state/side-navigation-state.service';
import { ResponsiveService } from 'src/app/UI/core/services/responsive.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationFacadeService {

  constructor(private sideNavigationState: SideNavigationStateService, private responsiveService: ResponsiveService) {
    this.responsiveService.isMobile$.subscribe( response=>{
      if(response){
        sideNavigationState.collapseSideNavigation();
      }
    });
  }

  get isSideNavigationBarCollapsed$(){
    return this.sideNavigationState.isCollapsed$;
  }

  toogleSideNav(){
    this.sideNavigationState.isCollapsed ? this.sideNavigationState.expandSideNavigation() : this.sideNavigationState.collapseSideNavigation();
  }
}
