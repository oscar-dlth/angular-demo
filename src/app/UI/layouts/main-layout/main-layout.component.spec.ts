import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { of } from 'rxjs';
import { SideNavigationFacadeService } from '../../components/side-navigation-bar/facade/side-navigation-facade.service';
import { ResponsiveService } from '../../modules/core/services/responsive.service';
import { StoreModule } from '@ngrx/store';
import { sideNavReducer } from '../../state/reducers/side-nav-reducer';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ sidenav: sideNavReducer })
      ],
      declarations: [ MainLayoutComponent ],
      providers: [
         SideNavigationFacadeService,
         ResponsiveService
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
    let sideNavigationFacade = jasmine.createSpyObj('SideNavigationFacadeService', ['isSideNavigationBarCollapsed$'])
    let responsiveService = jasmine.createSpyObj('ResponsiveService', ['isTablet$','isMobile$','isDesktop$','isLarge$','isTabletOrMobile$']);

    sideNavigationFacade.isSideNavigationBarCollapsed$.and.returnValue(of(false))
    responsiveService.isTablet$.and.returnValue(of(true));
    responsiveService.isDesktop$.and.returnValue(of(true));
    responsiveService.isLarge$.and.returnValue(of(false));
    responsiveService.isMobile$.and.returnValue(of(false));
    expect(component).toBeTruthy();
  });
});
