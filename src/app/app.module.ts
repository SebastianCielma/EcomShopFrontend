import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ProductComponent } from './modules/product/product.component';
import { HomeComponent } from './modules/home/home.component';
import { DefaultModule } from './layouts/default/default.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { LoginComponent } from './modules/login/login.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminComponent } from './modules/admin/admin.component';
import { FullpageadminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageadminModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
