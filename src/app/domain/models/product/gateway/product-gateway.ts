import { Observable } from "rxjs";
import { BasePagedModel } from "../../common/BasePagedModel";
import { Product } from "../product";
import { PageParams } from "../../base/pageParams";

export abstract class ProductGateway {
  abstract getAll(params: PageParams): Observable<BasePagedModel<Product>>;
}
