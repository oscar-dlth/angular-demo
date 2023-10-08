import { TestBed } from '@angular/core/testing';
import { BrandsApiService } from './brands-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('BrandsApiService', () => {
  let service: BrandsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]
    });
    service = TestBed.inject(BrandsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
