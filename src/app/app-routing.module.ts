import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/components/home/home.component';
import { UsersModule } from './UI/modules/users/users.module';
import { ProductsModule } from './UI/modules/products/products.module';
import { CategoriesModule } from './UI/modules/categories/categories.module';
import { BrandsModule } from './UI/modules/brands/brands.module';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: 'Angular Demo'
  },
  {
    path:'users',
    loadChildren: () => import('../app/UI/modules/users/users.module').then(m => m.UsersModule),
    title: 'Users'
  },
  {
    path:'products',
    loadChildren: () => import('../app/UI/modules/products/products.module').then(m => m.ProductsModule),
    title: 'Products'
  },
  {
    path:'categories',
    loadChildren: () => import('../app/UI/modules/categories/categories.module').then(m => m.CategoriesModule),
    title: 'Categories'
  },
  {
    path:'brands',
    loadChildren: () => import('../app/UI/modules/brands/brands.module').then(m => m.BrandsModule),
    title: 'Brands'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
