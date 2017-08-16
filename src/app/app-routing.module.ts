import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductListComponent} from './pruduct/product-list.component';
import {ProductDetailComponent} from './pruduct/product-detail.component';

import {CartComponent} from './order/cart.component';

import {UserCenterComponent} from './user/user-center.component';
import {SignInComponent} from "./user/sign-in.component";

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'user',
    component: UserCenterComponent
  },
  {
    path: 'login',
    component: SignInComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
