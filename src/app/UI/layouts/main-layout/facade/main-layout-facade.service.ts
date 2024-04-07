import { Injectable } from '@angular/core';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Distribution } from 'src/app/UI/common/enums';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutFacadeService {
  isSideNavigationBarCollapsed$;
  constructor(store: Store<{ sidenav: boolean }>, private responsiveService: ResponsiveService) {
    this.isSideNavigationBarCollapsed$ = store.select('sidenav')
  }

  public getMobileClassIfDistributionIsMobile$(){
    return this.isMobileDistribution$().pipe(map( isMobileDistribution => {
      if(isMobileDistribution){
        return 'is-mobile';
      }

      return '' ;
    }));
  }

  private isMobileDistribution$(): Observable<boolean>{
    return this.responsiveService.currentDistribution.pipe(map(distribution=> {
      return distribution === Distribution.Mobile;
    }));
  }

  public getWidthClass$(): Observable<string>{
    const distributionClases = {
      [Distribution.Desktop]: 'desktop-width',
      [Distribution.Tablet]: 'tablet-width',
      [Distribution.Mobile]: 'mobile-width'
    };

    return this.responsiveService.currentDistribution.pipe(map(distribution=>{
      return distributionClases[distribution] || '';
    }))
  }
}
