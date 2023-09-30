import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/components/home/home.component';
import { SideNavigationBarComponent } from './UI/components/side-navigation-bar/side-navigation-bar.component';
import { MainLayoutComponent } from './UI/layouts/main-layout/main-layout.component';
import { FooterComponent } from './UI/components/footer/footer.component';
import { HeaderComponent } from './UI/components/header/header.component';
import { CoreModule } from './UI/modules/core/core.module';
import { SharedModule } from './UI/modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavigationBarComponent,
    MainLayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
