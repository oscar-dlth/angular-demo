import { Observable } from "rxjs";
import { BasePagedModel } from "../../common/BasePagedModel";
import { Category } from "../category";

export abstract class CategoryGateway {
  abstract getAll(): Observable<BasePagedModel<Category>>;
}
