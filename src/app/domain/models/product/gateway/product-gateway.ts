import { Observable } from "rxjs";
import { BasePagedModel } from "../../common/BasePagedModel";
import { Product } from "../product";

export abstract class ProductGateway {
  abstract getAll(): Observable<BasePagedModel<Product>>;
}
