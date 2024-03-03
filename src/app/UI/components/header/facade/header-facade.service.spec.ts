import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from 'src/app/UI/modules/core/state/reducers/theme-reducer';
import { ThemeService } from 'src/app/UI/modules/core/services/theme.service';
import { HeaderFacadeService } from './header-facade.service';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Distribution } from 'src/app/UI/common/enums';

describe('HeaderFacadeService', () => {
  let service: HeaderFacadeService;
  const themeServiceSpy = jasmine.createSpyObj('ThemeService', ['isDarkTheme$', 'updateTheme']);
  const responsiveServiceSpy = jasmine.createSpyObj('ResponsiveService', ['currentDistribution','isTablet$'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(themeReducer)
      ],
      providers: [
        {
          provide: ThemeService,
          useValue: themeServiceSpy
        }, {
          provide: ResponsiveService,
          useValue: responsiveServiceSpy
        }
      ]
    });
    service = TestBed.inject(HeaderFacadeService);
  });

  it('should be created', () => {
    responsiveServiceSpy.currentDistribution.and.returnValue(of(Distribution.Desktop));
    responsiveServiceSpy.isTablet$.and.returnValue(of(true));
    themeServiceSpy.isDarkTheme$.and.returnValue(of(true))
    expect(service).toBeTruthy();
  });
});
