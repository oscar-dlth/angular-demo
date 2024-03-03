import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Brand } from 'src/app/domain/models/brands/brand';
import { BrandGateway } from 'src/app/domain/models/brands/gateway/brand-gateway';
import { BasePagedModel } from 'src/app/domain/models/common/BasePagedModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsApiService extends BrandGateway {
  constructor(private http: HttpClient ) {
    super();
  }

  getAll(): Observable<BasePagedModel<Brand>> {
    return this.http.get<BasePagedModel<Brand>>(`${environment.apiBaseUrl}/api/products?keyWord=&size=6&page=0`).pipe( map( (response:any) => {
      return response.data;
    }));
  }
}
