import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PageParams } from "src/app/domain/models/base/pageParams";
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";
import { ProductGateway } from "src/app/domain/models/product/gateway/product-gateway";
import { Product } from "src/app/domain/models/product/product";

@Injectable({
  providedIn: 'root'
})

export class ProductsUseCases {
  constructor(private _productGateway: ProductGateway) {}

  getAllProducts (params: PageParams) : Observable <BasePagedModel<Product>> {
    return this._productGateway.getAll(params);
  }

}
