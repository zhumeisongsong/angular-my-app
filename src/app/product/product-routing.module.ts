import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductSearchComponent} from "./product-search.component";

const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'search',
        component: ProductSearchComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
      {
        path: '',
        component: ProductListComponent,
      },
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
