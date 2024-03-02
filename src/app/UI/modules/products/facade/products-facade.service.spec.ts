import { TestBed } from '@angular/core/testing';

import { ProductsFacadeService } from './products-facade.service';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/domain/models/product/product';
import { GenericState } from '../../shared/models/GenericState';
import { of } from 'rxjs';

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
    const state : GenericState<Product> = {
      model: null,
      list: [],
      currentPage: 0,
      pageSize: 5,
      keyWord: '',
      isLoading: false,
      isLoadingFailure: false,
      isLoadingSuccess: false
    };
    storeService.select.and.returnValue(of(state))
    service = TestBed.inject(ProductsFacadeService);
  });

  it('should be created', () => {
    const state : GenericState<Product> = {
      model: null,
      list: [],
      currentPage: 0,
      pageSize: 5,
      keyWord: '',
      isLoading: false,
      isLoadingFailure: false,
      isLoadingSuccess: false
    };
    storeService.select.and.returnValue(of(state))
    service = TestBed.inject(ProductsFacadeService);
    expect(service).toBeTruthy();
    service.products$.subscribe( result=> {
      expect(result).toEqual([]);
    })
  });
});
