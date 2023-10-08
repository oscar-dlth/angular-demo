import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { ProductsComponent } from './products.component';
import { ProductsFacadeService } from '../facade/products-facade.service';
import { of } from 'rxjs';
import { productsReducer } from '../state/reducers/product-reducers';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  // Spy for the ProductsFacadeService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        StoreModule.forRoot({}), // Add the root store module
        StoreModule.forFeature('products', productsReducer),
      ],
      providers: [
        ProductsFacadeService
      ],
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const productsFacadeServiceSpy = jasmine.createSpyObj('ProductsFacadeService', ['products$', 'getProducts']);

    productsFacadeServiceSpy.getProducts.and.returnValue(undefined);
    productsFacadeServiceSpy.products$.and.returnValue(of([]));
    expect(component).toBeTruthy();
  });
});
