import {NgModule}               from '@angular/core';
import {BrowserModule}          from '@angular/platform-browser';
import {FormsModule}            from '@angular/forms';

//引用组件
import {AppComponent}         from './app.component';
import {ListComponent}        from './pruduct/list.component';
import {HeroDetailComponent}  from './pruduct/hero-detail.component';
import {HeroesComponent}      from './heroes.component';

import {CartComponent}        from './order/cart.component';
import {UserCenterComponent}  from './user/user-center.component';

import {HeroService}          from './hero.service';

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
    HeroDetailComponent,
    CartComponent,
    UserCenterComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
