import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";
import { ProductGateway } from "src/app/domain/models/product/gateway/product-gateway";
import { Product } from "src/app/domain/models/product/product";

@Injectable({
  providedIn: 'root'
})

export class GetProductsUseCase {
  constructor(private _productGateway: ProductGateway) {}

  getAllUsers () : Observable <BasePagedModel<Product>> {
    return this._productGateway.getAll();
  }

}
