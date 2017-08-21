import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product/list',
        component: ProductListComponent
      },
      {
        path: 'product/detail/:id',
        component: ProductDetailComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
