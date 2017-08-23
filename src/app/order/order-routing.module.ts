import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {OrderComponent} from "./order.component";

import {OrderNavComponent} from "./order-nav.component";
import {OrderListComponent} from './order-list.component';
import {OrderDetailComponent} from "./order-detail.component";

import {OrderConfirmComponent} from "./order-confirm.component";

const orderRoutes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    children: [
      {
        path: '',
        component: OrderNavComponent,
        children: [
          {
            path: ':status',
            component: OrderListComponent
          },
        ]
      },
      {
        path: ':id',
        component: OrderDetailComponent
      },
      {
        path: 'confirm',
        component: OrderConfirmComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [RouterModule]
})

export class OrderRoutingModule {
}
