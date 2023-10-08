import { TestBed } from '@angular/core/testing';

import { ProductsApiService } from './products-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsApiService', () => {
  let service: ProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
