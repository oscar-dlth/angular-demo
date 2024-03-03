import { TestBed } from '@angular/core/testing';
import { MainLayoutFacadeService } from './main-layout-facade.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { StoreModule } from '@ngrx/store';
import { sideNavReducer } from 'src/app/UI/state/reducers/side-nav-reducer';
import { Distribution } from 'src/app/UI/common/enums';

describe('ResponsiveService', () => {
  let service: MainLayoutFacadeService;
  const responsiveServiceSpy = jasmine.createSpyObj('ResponsiveService', ['currentDistribution','isTablet$']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ sidenav: sideNavReducer })
      ],
      providers:[
        { provide: ResponsiveService, useValue: responsiveServiceSpy },
      ]
    });
    service = TestBed.inject(MainLayoutFacadeService);
  });

  it('should be created', () => {
    responsiveServiceSpy.currentDistribution.and.returnValue(of(Distribution.Desktop));
    responsiveServiceSpy.isTablet$.and.returnValue(of(true));
    expect(service).toBeTruthy();
  });
});
