import { Injectable } from '@angular/core';
import { PageParams } from 'src/app/domain/models/base/pageParams';
import { GenericState } from '../../shared/models/GenericState';
import { Product } from 'src/app/domain/models/product/product';
import { Store } from '@ngrx/store';
import { getProducts } from '../state/actions/product-actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacadeService {

  private state$: Observable<GenericState<Product>>;
  constructor(private store: Store<{ products: GenericState<Product> }>) {
    this.state$ =  store.select('products');
  }

  getProducts(params: PageParams){
    this.store.dispatch(getProducts({ params }))
  }

  get products$(): Observable<Product[]>{
    return this.state$.pipe(map(state => state.list));
  }
}
