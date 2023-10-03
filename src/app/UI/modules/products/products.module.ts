import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/reducers/product-reducers';
import { ProductsUseCases } from 'src/app/application/products/products-use-cases';
import { ProductGateway } from 'src/app/domain/models/product/gateway/product-gateway';
import { ProductsApiService } from 'src/app/infrastructure/driven-adapters/products-api/products-api.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffectsService } from './state/effects/product-effects.service';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductEffectsService])
  ],
  providers: [
    ProductsUseCases,
    {
      provide: ProductGateway,
      useClass: ProductsApiService
    }
  ]
})
export class ProductsModule { }
