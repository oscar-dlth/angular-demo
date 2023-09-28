import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Brand } from 'src/app/domain/models/brands/brand';
import { BrandGateway } from 'src/app/domain/models/brands/gateway/brand-gateway';
import { BasePagedModel } from 'src/app/domain/models/common/BasePagedModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends BrandGateway {
  constructor(private http: HttpClient ) {
    super();
  }

  getAll(): Observable<BasePagedModel<Brand>> {
    return this.http.get<BasePagedModel<Brand>>('https://ecommerce-zad1-dev.fl0.io/api/products?keyWord=&size=6&page=0').pipe( map( (response:any) => {
      return response.data;
    }));
  }
}
