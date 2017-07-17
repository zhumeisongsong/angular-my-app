import {NgModule}               from '@angular/core';
import {BrowserModule}          from '@angular/platform-browser';
import {FormsModule}            from '@angular/forms';

//引用组件
import {AppComponent}         from './app.component';
import {ListComponent}        from './pruduct/list.component';
import {ProductDetailComponent}  from './pruduct/product-detail.component';
import {HeroesComponent}      from './pruduct/heroes.component';

import {CartComponent}        from './order/cart.component';
import {UserCenterComponent}  from './user/user-center.component';

import {ProductService}          from './pruduct/product.service';

import {AppRoutingModule}     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    HeroesComponent,
    ProductDetailComponent,
    CartComponent,
    UserCenterComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
