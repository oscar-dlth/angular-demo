import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasePagedModel } from 'src/app/domain/models/common/BasePagedModel';
import { ProductGateway } from 'src/app/domain/models/product/gateway/product-gateway';
import { Product } from 'src/app/domain/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends ProductGateway {
  constructor(private http: HttpClient ) {
    super();
  }

  getAll(): Observable<BasePagedModel<Product>> {
    return this.http.get<BasePagedModel<Product>>('https://ecommerce-zad1-dev.fl0.io/api/products?keyWord=&size=6&page=0').pipe( map( (response:any) => {
      return response.data;
    }));
  }
}
