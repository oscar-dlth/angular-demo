import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../../modules/core/services/theme.service';
import { ResponsiveService } from '../../modules/core/services/responsive.service';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from '../../modules/core/state/reducers/theme-reducer';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot (themeReducer )
      ],
      providers: [
        ThemeService,
        ResponsiveService
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const themeService = jasmine.createSpyObj('ThemeService', ['isDarkTheme$', 'updateTheme']);
    const responsiveService = jasmine.createSpyObj('ResponsiveService', ['isTabletOrMobile$', 'isMobile$']);
    responsiveService.isMobile$.and.returnValue(of(false));
    themeService.isDarkTheme$.and.returnValue(of(true))
    expect(component).toBeTruthy();
  });
});
