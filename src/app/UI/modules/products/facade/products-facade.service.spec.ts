import { TestBed } from '@angular/core/testing';

import { ProductsFacadeService } from './products-facade.service';
import { Store } from '@ngrx/store';

describe('ProductsFacadeService', () => {
  let service: ProductsFacadeService;
  let storeService = jasmine.createSpyObj('Store', ['select'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Store,
          useValue: storeService
        }
      ]
    });
    service = TestBed.inject(ProductsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
