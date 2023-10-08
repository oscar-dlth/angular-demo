import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ThemeService } from './UI/modules/core/services/theme.service';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { ResponsiveService } from './UI/modules/core/services/responsive.service';
import { SideNavigationFacadeService } from './UI/components/side-navigation-bar/facade/side-navigation-facade.service';

describe('AppComponent', () => {
  let themeService = jasmine.createSpyObj('ThemeService', ['isDarkTheme$', 'updateTheme']);
  let storeService = jasmine.createSpyObj('Store', ['select']);
  let responsiveService = jasmine.createSpyObj('ResponsiveService', ['isTablet$','isMobile$','isDesktop$','isLarge$','isTabletOrMobile$']);
  let sideNavigationFacadeService = jasmine.createSpyObj('SideNavigationFacadeService', ['toogleSideNav']);

  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: SideNavigationFacadeService, useValue: sideNavigationFacadeService },
        { provide: ResponsiveService , useValue: responsiveService},
        { provide: Store , useValue: storeService},
        { provide: ThemeService, useValue: themeService},
      ]
    }).compileComponents();

  });

  beforeEach(() => {
    component = new AppComponent(themeService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
