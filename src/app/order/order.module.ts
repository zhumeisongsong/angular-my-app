import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {OrderComponent} from './order.component';
import {OrderConfirmComponent} from './order-confirm.component';
import {OrderTabComponent} from './order-tab.component';
import {OrderListComponent} from './order-list.component';
import {AddressDefaultComponent} from "../user/address/address-default.component";
import {OrderPdListComponent} from "./order-pd-list.component";
import {OrderDetailComponent} from './order-detail.component';

import {OrderService} from'./order.service';
import {OrderTabService} from './order-tab.service';

import {OrderRoutingModule} from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderComponent,

    OrderTabComponent,
    OrderListComponent,
    OrderPdListComponent,
    OrderDetailComponent,

    AddressDefaultComponent,
    OrderConfirmComponent,
  ],
  exports: [],//特性模块可以对其他模块暴露或隐藏自己的实现
  providers: [
    OrderTabService,
    OrderService
  ]
})

export class OrderModule {
}
