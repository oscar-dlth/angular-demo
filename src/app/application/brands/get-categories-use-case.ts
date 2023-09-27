import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Brand } from "src/app/domain/models/brands/brand";
import { BrandGateway } from "src/app/domain/models/brands/gateway/brand-gateway";
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";

@Injectable({
  providedIn: 'root'
})

export class GetBrandsUseCase {
  constructor( private _brandGateway: BrandGateway) {}

  getAllUsers () : Observable <BasePagedModel<Brand>> {
    return this._brandGateway.getAll();
  }
}
