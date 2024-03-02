import { Injectable } from '@angular/core';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggle } from 'src/app/UI/state/actions/side-nav-actions';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationFacadeService {

  private isSideNavigationBarCollapsed$: Observable<boolean>;
  constructor(private store: Store<{ sidenav: boolean }>, private responsiveService: ResponsiveService) {
    this.isSideNavigationBarCollapsed$ = store.select('sidenav')
  }

  toggleSideNav(){
    this.store.dispatch(toggle());
  }

  get isCollapsed$() {
    return this.isSideNavigationBarCollapsed$;
  }
}
