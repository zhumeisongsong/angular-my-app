//特性模块定义自己的路由
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {OrderListComponent} from "./order-list.component";
import {OrderDetailComponent} from "./order-detail.component";
import {OrderConfirmComponent} from "./order-confirm.component";
import {CartComponent} from "./cart.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'cart', component: CartComponent},
      {path: 'order/list', component: OrderListComponent},
      {path: 'order/detail/:id', component: OrderDetailComponent},
      {path: 'order/confirm', component: OrderConfirmComponent}
    ])],
  exports: [RouterModule]
})

export class OrderRoutingModule {
}
