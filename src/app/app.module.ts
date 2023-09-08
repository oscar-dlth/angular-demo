import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './UI/layout/navigation-bar/navigation-bar.component';
import { SideNavigationBarComponent } from './UI/layout/side-navigation-bar/side-navigation-bar.component';
import { HomeComponent } from './UI/home/home.component';
import { UserGateway } from './domain/models/user/gateway/user-gateway';
import { UsersApiService } from './infrastructure/driven-adapters/users-api/users-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SideNavigationBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
