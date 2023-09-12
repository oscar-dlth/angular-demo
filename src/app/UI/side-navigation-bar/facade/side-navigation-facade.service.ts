import { Injectable } from '@angular/core';
import { SideNavigationStateService } from '../state/side-navigation-state.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationFacadeService {

  constructor(private sideNavigationState: SideNavigationStateService) { }

  get isSideNavigationBarCollapsed$(){
    return this.sideNavigationState.isSideNavigationBarCollapsed$;
  }

  get sideNavigationBarWith$(){
    return this.sideNavigationState.sideNavigationBarWith$;
  }

  toogleSideNav(){
    this.sideNavigationState.toggleSideNavigationCollapsedState();
  }
}
