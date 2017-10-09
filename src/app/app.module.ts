import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from  '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

// Routing module
import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//angular material module
import {CustomMaterialModule} from './custom-material.module';

// App root
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {LoginComponent} from './login.component';

// Feature modules async
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {OrderModule} from './order/order.module';
import {UserModule} from './user/user.module';
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    CustomMaterialModule,
    AppRoutingModule,

    ProductModule,
    CartModule,
    OrderModule,
    UserModule,
    LoginRoutingModule,

    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  exports: [
  ],
  providers: [
  ], //global service
  bootstrap: [AppComponent]
})

export class AppModule {
}
