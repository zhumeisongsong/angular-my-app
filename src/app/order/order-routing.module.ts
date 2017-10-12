import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {OrderComponent} from "./order.component";
import {OrderTabComponent} from "./order-tab.component";
import {OrderDetailComponent} from "./order-detail.component";
import {OrderConfirmComponent} from "./order-confirm.component";

const orderRoutes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'confirm',
        component: OrderConfirmComponent,
      },
      {
        path: '',
        component: OrderTabComponent,
      },
      // {
      //   path: ':id',
      //   component: OrderDetailComponent
      // },
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
