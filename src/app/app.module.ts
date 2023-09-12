import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './UI/components/navigation-bar/navigation-bar.component';
import { SideNavigationBarComponent } from './UI/side-navigation-bar/side-navigation-bar.component';
import { HomeComponent } from './UI/components/home/home.component';
import { MainLayoutComponent } from './UI/layouts/main-layout/main-layout.component';
import { ToogleButtonComponent } from './UI/components/common/toogle-button/toogle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SideNavigationBarComponent,
    HomeComponent,
    MainLayoutComponent,
    ToogleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
