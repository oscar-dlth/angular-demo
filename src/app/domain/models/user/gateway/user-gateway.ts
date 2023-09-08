import { Observable } from "rxjs";
import { User } from "../user";
import { BasePagedModel } from "../../common/BasePagedModel";

export abstract class UserGateway {
  abstract getAll(): Observable<BasePagedModel<User>>;
}
