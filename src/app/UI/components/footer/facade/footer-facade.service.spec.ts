import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ResponsiveService } from 'src/app/UI/modules/core/services/responsive.service';
import { Distribution } from 'src/app/UI/common/enums';
import { FooterFacadeService } from './footer-facade.service';

describe('FooterFacadeService', () => {
  let service: FooterFacadeService;
  const responsiveServiceSpy = jasmine.createSpyObj('ResponsiveService', ['currentDistribution','isTablet$'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ResponsiveService,
          useValue: responsiveServiceSpy
        }
      ]
    });
    service = TestBed.inject(FooterFacadeService);
  });

  it('should be created', () => {
    responsiveServiceSpy.currentDistribution.and.returnValue(of(Distribution.Desktop));
    responsiveServiceSpy.isTablet$.and.returnValue(of(true));
    expect(service).toBeTruthy();
  });
});
