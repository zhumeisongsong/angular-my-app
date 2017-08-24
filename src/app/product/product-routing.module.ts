import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";

const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children:[
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule {
}
//子组件与子路由 比如list嵌套了swiper swiper是list的子组件？
