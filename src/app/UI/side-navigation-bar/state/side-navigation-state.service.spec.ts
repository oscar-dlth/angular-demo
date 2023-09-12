import { TestBed } from '@angular/core/testing';
import { SideNavigationStateService } from './side-navigation-state.service';


describe('LayoutStateService', () => {
  let service: SideNavigationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavigationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
