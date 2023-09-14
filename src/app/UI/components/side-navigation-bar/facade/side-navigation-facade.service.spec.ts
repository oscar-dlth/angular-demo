import { TestBed } from '@angular/core/testing';

import { SideNavigationFacadeService } from './side-navigation-facade.service';

describe('SideNavigationFacadeService', () => {
  let service: SideNavigationFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavigationFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
