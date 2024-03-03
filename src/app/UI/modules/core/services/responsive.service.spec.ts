import { TestBed } from '@angular/core/testing';
import { ResponsiveService } from './responsive.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { of } from 'rxjs';

describe('ResponsiveService', () => {
  let service: ResponsiveService;
  const breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: BreakpointObserver, useValue: breakpointObserverSpy },
      ]
    });
    service = TestBed.inject(ResponsiveService);
  });

  it('should be created', () => {
    breakpointObserverSpy.observe.and.returnValue(of([]));
    expect(service).toBeTruthy();
  });
});
