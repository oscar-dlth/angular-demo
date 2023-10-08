import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationBarComponent } from './side-navigation-bar.component';
import { SideNavigationFacadeService } from './facade/side-navigation-facade.service';
import { ResponsiveService } from '../../modules/core/services/responsive.service';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { sideNavReducer } from '../../state/reducers/side-nav-reducer';

describe('SideNavigationBarComponent', () => {
  let component: SideNavigationBarComponent;
  let fixture: ComponentFixture<SideNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ sidenav: sideNavReducer }),
      ],
      declarations: [ SideNavigationBarComponent ],
      providers: [
        SideNavigationFacadeService,
        ResponsiveService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let sideNavigationFacadeService = jasmine.createSpyObj('SideNavigationFacadeService', ['toogleSideNav','isSideNavigationBarCollapsed$'])
    let resposiveService = jasmine.createSpyObj('ResponsiveService', ['isMobile$'])
    resposiveService.isMobile$.and.returnValue(of(false));
    sideNavigationFacadeService.isSideNavigationBarCollapsed$.and.returnValue(of(false))
    expect(component).toBeTruthy();
  });
});
