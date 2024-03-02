import { Injectable } from '@angular/core';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggle } from 'src/app/UI/state/actions/side-nav-actions';
import { Distribution } from 'src/app/UI/common/enums';
import { map } from 'rxjs/operators';
import { ThemeService } from 'src/app/UI/modules/core/services/theme.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderFacadeService {

  constructor(private responsiveService: ResponsiveService, private themeService: ThemeService) {

  }

  getAlignClass$(): Observable<string> {
    return this.responsiveService.currentDistribution.pipe(map(distribution => {
      if (distribution === Distribution.Mobile) {
        return 'justify-content-center'
      }

      return '';
    }))
  }

  canDisplayUsersLink$(): Observable<boolean>{
    return this.responsiveService.currentDistribution.pipe(map(distribution=> {
      return distribution !== Distribution.Mobile;
    }))
  }

  updateTheme(isDarkTheme: boolean){
    this.themeService.updateTheme(isDarkTheme);
  }

  isDarkTheme$(): Observable<boolean>{
    return this.themeService.isDarkTheme$;
  }
}
