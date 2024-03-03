import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { of } from 'rxjs';
import { MainLayoutFacadeService } from './facade/main-layout-facade.service';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;
  const mainLayoutFacadeServiceSpy = jasmine.createSpyObj('MainLayoutFacadeService', [ 'getMobileClassIfDistributionIsMobile$', 'isMobileDistribution$', 'getWithClass$']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent ],
      providers: [
        {
          provide: MainLayoutFacadeService,
          useValue: mainLayoutFacadeServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    mainLayoutFacadeServiceSpy.getMobileClassIfDistributionIsMobile$.and.returnValue(of('is-mobile'));
    mainLayoutFacadeServiceSpy.isMobileDistribution$.and.returnValue(of(true));
    mainLayoutFacadeServiceSpy.getWithClass$.and.returnValue(of('mobile-width'));
    expect(component).toBeTruthy();
  });
});
