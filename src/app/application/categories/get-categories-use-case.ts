import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/domain/models/category/category";
import { CategoryGateway } from "src/app/domain/models/category/gateway/category-gateway";
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";

@Injectable({
  providedIn: 'root'
})

export class GetCategoriesUseCase {
  constructor( private _categoryGateWay: CategoryGateway) {}

  getAllUsers () : Observable <BasePagedModel<Category>> {
    return this._categoryGateWay.getAll();
  }

}
