//特性模块提供内聚的功能聚合
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {OrderComponent} from './order.component';
import {OrderConfirmComponent} from './order-confirm.component';

import {OrderNavComponent} from './order-nav.component';
import {OrderListComponent} from './order-list.component';
import {OrderDetailComponent} from './order-detail.component';

import {OrderRoutingModule} from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderComponent,
    OrderConfirmComponent,

    OrderNavComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  exports: [],//特性模块可以对其他模块暴露或隐藏自己的实现
  providers: []
})

export class OrderModule {
}
