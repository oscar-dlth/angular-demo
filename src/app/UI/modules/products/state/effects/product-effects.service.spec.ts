import { TestBed } from '@angular/core/testing';

import { ProductEffectsService } from './product-effects.service';
import { Actions, EffectsModule } from '@ngrx/effects';
import { ProductsUseCases } from 'src/app/application/products/products-use-cases';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../reducers/product-reducers';

describe('ProductEffectsService', () => {
  let service: ProductEffectsService;
  const productUseCasesSpy = jasmine.createSpyObj('ProductsUseCases', ['getAllProducts']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        ProductEffectsService,
        { provide: ProductsUseCases, useValue: productUseCasesSpy }, // Provide the spy object
        Actions,
      ]
    });
    service = TestBed.inject(ProductEffectsService);
  });

  it('should be created', () => {

    productUseCasesSpy.getAllProducts.and.returnValue(of([]));

    expect(service).toBeTruthy();
  });
});
