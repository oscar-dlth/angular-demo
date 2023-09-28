import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/domain/models/category/category';
import { CategoryGateway } from 'src/app/domain/models/category/gateway/category-gateway';
import { BasePagedModel } from 'src/app/domain/models/common/BasePagedModel';

@Injectable({
  providedIn: 'root'
})

export class CategoriesApiService extends CategoryGateway {
  constructor(private http: HttpClient ) {
    super();
  }

  getAll(): Observable<BasePagedModel<Category>> {
    return this.http.get<BasePagedModel<Category>>('https://ecommerce-zad1-dev.fl0.io/api/products?keyWord=&size=6&page=0').pipe( map( (response:any) => {
      return response.data;
    }));
  }
}
