import {NgModule}               from '@angular/core';
import {BrowserModule}          from '@angular/platform-browser';
import {AppRoutingModule}       from './app-routing.module';

//App root
import {AppComponent} from './app.component';

//imports modules
import {ProductModule} from './product/product.module';
import {OrderModule} from './order/order.module';
import {UserModule} from './user/user.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,

    ProductModule,
    OrderModule,
    UserModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
