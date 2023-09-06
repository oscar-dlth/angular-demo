import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/home/home.component';
import { UsersModule } from './UI/users/users.module';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'users',
    loadChildren: () => UsersModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
