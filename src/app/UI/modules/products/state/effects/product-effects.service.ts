import { Injectable } from '@angular/core';
import * as productActions from '../actions/product-actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ProductsUseCases } from 'src/app/application/products/products-use-cases';
import { of } from 'rxjs';

@Injectable()
export class ProductEffectsService {

  constructor(private actions$: Actions, private productUseCases: ProductsUseCases) { }

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.getProducts),
      exhaustMap(action =>
        this.productUseCases.getAllProducts(action.params).pipe(
          map(response => productActions.getProductsSuccess(response)),
          catchError((error: any) => of(productActions.getProductsFailure(error))))
      )
    )
  );
}
