import { TestBed } from '@angular/core/testing';
import { HomeFacadeService } from './home-facade.service';

describe('ResponsiveService', () => {
  let service: HomeFacadeService;
  const homeFacadeServiceSpy = jasmine.createSpyObj('HomeFacadeService', ['test']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: HomeFacadeService, useValue: homeFacadeServiceSpy },
      ]
    });
    service = TestBed.inject(HomeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
