import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CartComponent} from './cart.component';

import {CartRoutingModule} from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule
  ],
  declarations: [
    CartComponent,
  ],
  exports: [
    CartComponent,
  ],//特性模块可以对其他模块暴露或隐藏自己的实现
  providers: []
})

export class CartModule {
}
