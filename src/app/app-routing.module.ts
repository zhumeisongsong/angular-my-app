import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found.component';
import {AuthGuard} from './login/auth-guard.service';

export const routes: Routes = [
  {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule',
  },
  // {
  //   path: 'cart',
  //   loadChildren: 'app/cart/cart.module#CartModule',
  // },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule',
    // canLoad: [AuthGuard]
  },
  {
    path: 'order',
    loadChildren: 'app/order/order.module#OrderModule',
    // canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true}
    ),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
