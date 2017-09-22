import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroListComponent} from "./reactive-forms/hero-list.component";
import {PageNotFoundComponent} from "./page-not-found.component";

// import { AuthGuard }                from './auth-guard.service';

export const routes: Routes = [
  {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule',
    data: {preload: true}
  },
  {
    path: 'cart',
    loadChildren: 'app/cart/cart.module#CartModule',
  },
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
    path: 'reactiveform',
    component: HeroListComponent,
  },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true}
    )//仅用于应用的根模块
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
