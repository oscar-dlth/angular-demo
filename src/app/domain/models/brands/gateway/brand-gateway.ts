import { Observable } from "rxjs";
import { BasePagedModel } from "../../common/BasePagedModel";
import { Brand } from "../brand";

export abstract class BrandGateway {
  abstract getAll(): Observable<BasePagedModel<Brand>>;
}
