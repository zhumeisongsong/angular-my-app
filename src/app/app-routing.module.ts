import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// import {PageNotFoundComponent} from "./page-not-found.component";

// import { AuthGuard }                from './auth-guard.service';

export const routes: Routes = [
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
    )//only used in root routing
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
