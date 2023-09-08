import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { User } from 'src/app/domain/models/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasePagedModel } from 'src/app/domain/models/common/BasePagedModel';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends UserGateway {
  constructor(private http: HttpClient ) {
    super();
  }

  getAll(): Observable<BasePagedModel<User>> {
    return this.http.get<BasePagedModel<User>>('https://ecommerce-zad1-dev.fl0.io/api/users?keyWord=&size=6&page=0').pipe( map( (response:any) => {
      return response.data;
    }));
  }
}
