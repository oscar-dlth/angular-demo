import { Injectable } from '@angular/core';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Distribution } from 'src/app/UI/common/enums';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FooterFacadeService {

  constructor(private store: Store<{ sidenav: boolean }>, private responsiveService: ResponsiveService) {

  }

  isNotDesktop$(): Observable<boolean>{
    return this.responsiveService.currentDistribution.pipe(map( distribution => distribution !== Distribution.Desktop));
  }
}
