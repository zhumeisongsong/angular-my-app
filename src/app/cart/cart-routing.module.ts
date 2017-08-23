import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";

import {CartComponent} from "./cart.component";

const orderRoutes:Routes = [
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [RouterModule]
})

export class CartRoutingModule {
}
