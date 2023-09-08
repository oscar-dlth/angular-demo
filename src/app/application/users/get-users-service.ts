import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";
import { UserGateway } from "src/app/domain/models/user/gateway/user-gateway";
import { User } from "src/app/domain/models/user/user";

@Injectable({
  providedIn: 'root'
})

export class GetUsersService {
  constructor( private _userGateWay: UserGateway) {}

  getAllUsers () : Observable <BasePagedModel<User>> {
    return this._userGateWay.getAll();
  }

}
