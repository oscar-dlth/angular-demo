import { TestBed } from '@angular/core/testing';

import { SideNavigationFacadeService } from './side-navigation-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { of } from 'rxjs';
import { sideNavReducer } from 'src/app/UI/state/reducers/side-nav-reducer';

describe('SideNavigationFacadeService', () => {
  let service: SideNavigationFacadeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ sidenav: sideNavReducer })
      ],
      providers: [
        ResponsiveService
      ]
    });
    service = TestBed.inject(SideNavigationFacadeService);
  });

  it('should be created', () => {
    let responsiveService = jasmine.createSpyObj('ResponsiveService', ['isTablet$', 'isMobile$', 'isMobile$.subscribe', 'isDesktop$', 'isLarge$', 'isTabletOrMobile$']);

    responsiveService.isMobile$.and.returnValue(of(true))
    expect(service).toBeTruthy();
  });
});
