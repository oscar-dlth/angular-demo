import { Component, OnInit } from '@angular/core';
import { ProductsFacadeService } from '../facade/products-facade.service';
import { PageParams } from 'src/app/domain/models/base/pageParams';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/domain/models/product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  constructor(private productsFacade: ProductsFacadeService) {

  }

  ngOnInit(): void {
    const params: PageParams = {
      page: 0,
      size: 5,
      keyWord: ''
    };

    this.productsFacade.getProducts(params);
  }

  get products$(): Observable<Product[]> {
    return this.productsFacade.products$;
  }
}
