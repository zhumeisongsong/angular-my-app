import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

// Routing module
import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// App root
import {AppComponent} from './app.component';

// Feature modules 不导入的module被异步获取并加载
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {OrderModule} from './order/order.module';
import {UserModule} from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,

    ProductModule,
    CartModule,
    OrderModule,
    UserModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],// 这里注册的是全应用级服务
  bootstrap: [AppComponent]
})

export class AppModule {
}
