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

import {HeroListComponent} from './reactive-forms/hero-list.component';
import {HeroDetailComponent} from './reactive-forms/hero-detail.component';
import {HeroService} from './reactive-forms/hero.service';

// Feature modules async
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {OrderModule} from './order/order.module';
import {UserModule} from './user/user.module';

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

    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,

    HeroListComponent,
    HeroDetailComponent,
  ],
  exports: [
  ],
  providers: [
    HeroService
  ], //global service
  bootstrap: [AppComponent]
})

export class AppModule {
}
