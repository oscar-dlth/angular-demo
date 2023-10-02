import { Injectable } from '@angular/core';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { collapse, toggle } from 'src/app/UI/app-state/actions/side-nav-actions';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationFacadeService {

  public isSideNavigationBarCollapsed$: Observable<boolean>;
  constructor(private store: Store<{ sidenav: boolean }>, private responsiveService: ResponsiveService) {
    this.isSideNavigationBarCollapsed$ = store.select('sidenav')
    this.responsiveService.isMobile$.subscribe( response =>{
      if(response){
        store.dispatch(collapse());
      }
    });

  }

  toogleSideNav(){
    this.store.dispatch(toggle())
  }
}
