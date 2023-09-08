import { Injectable } from '@angular/core';
import { LayoutStateService } from '../state/layout-state.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutFacadeService {

  constructor(private layoutState: LayoutStateService) { }

  get isSideNavigationBarCollapsed$(){
    return this.layoutState.isSideNavigationBarCollapsed$;
  }

  get sideNavigationBarWith$(){
    return this.layoutState.sideNavigationBarWith$;
  }

  toogleSideNav(){
    this.layoutState.toggleSideNavigationCollapsedState();
  }
}
