import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PageParams } from 'src/app/domain/models/base/pageParams';
import { BasePagedModel } from 'src/app/domain/models/common/BasePagedModel';
import { ProductGateway } from 'src/app/domain/models/product/gateway/product-gateway';
import { Product } from 'src/app/domain/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends ProductGateway {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(pageParams: PageParams): Observable<BasePagedModel<Product>> {
    return this.http.get<BasePagedModel<Product>>(`https://ecommerce-zad1-dev.fl0.io/api/products?keyWord=${pageParams.keyWord}&size=${pageParams.size}&page=${pageParams.page}`).pipe(
      map((response: any) => response.data,
        catchError((error: any) => of(error))
      )
    );
  }
}
