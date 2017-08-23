import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//app root
import {AppComponent} from './app.component';

//feature modules 不导入的module被异步获取并加载
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {OrderModule} from './order/order.module';
import {UserModule} from './user/user.module';

//routing module
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ProductModule,
    CartModule,
    OrderModule,
    UserModule,

    AppRoutingModule,//放在最后，因为存在默认路由和通配符路由
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
